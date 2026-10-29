import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Brands from './components/Brands.jsx'
import Services from './components/Services.jsx'
import WhyUs from './components/WhyUs.jsx'
import Process from './components/Process.jsx'
import Faq from './components/Faq.jsx'
import ServiceAreas from './components/ServiceAreas.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-ink-950">
      <Navbar />
      <main id="main">
        <Hero />
        <Brands />
        <Services />
        <WhyUs />
        <Process />
        <Faq />
        <ServiceAreas />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
