import { execFileSync } from 'node:child_process'
import { cpSync, mkdtempSync, rmSync, writeFileSync, existsSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

/**
 * dist/ klasörünü temiz bir gh-pages dalı olarak yayınlar.
 *
 * `gh-pages` paketi yerine bu betiği kullanıyoruz çünkü:
 *   - dotfile'lar (.nojekyll) garanti şekilde kök dizine kopyalanır
 *   - proje kökündeki .gitignore / public gibi dosyalar yayına sızmaz
 *   - yayınlanan içerik birebir dist/ ile aynıdır
 */

const run = (args, cwd) =>
  execFileSync('git', args, { cwd, stdio: 'inherit' })

const remote = execFileSync('git', ['config', '--get', 'remote.origin.url'], {
  encoding: 'utf8',
}).trim()

const dist = join(process.cwd(), 'dist')
if (!existsSync(join(dist, 'index.html'))) {
  console.error('✗ dist/index.html bulunamadı. Önce `npm run build` çalıştırın.')
  process.exit(1)
}

const work = mkdtempSync(join(tmpdir(), 'emirotomotiv-deploy-'))

try {
  run(['init', '-q'], work)
  run(['checkout', '-q', '-b', 'gh-pages'], work)

  cpSync(dist, work, { recursive: true })

  // Jekyll'i devre dışı bırak (alt çizgi ile başlayan dosyalar korunsun)
  writeFileSync(join(work, '.nojekyll'), '')

  // Özel alan adı tanımlıysa korunur
  if (existsSync(join(process.cwd(), 'public', 'CNAME'))) {
    cpSync(join(process.cwd(), 'public', 'CNAME'), join(work, 'CNAME'))
  }

  run(['add', '-A', '--force'], work)
  run(
    ['commit', '-q', '-m', `Deploy: ${new Date().toISOString()}`],
    work,
  )
  run(['remote', 'add', 'origin', remote], work)
  run(['push', '--force', 'origin', 'gh-pages'], work)

  console.log('✓ gh-pages dalı güncellendi')
} finally {
  rmSync(work, { recursive: true, force: true })
}
