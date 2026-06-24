import Analysis from "./components/Analysis"
import Analytics from "./components/Analytics"
import Feature from "./components/Feature"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import HowItWorks from "./components/HowItWorks"
import Navbar from "./components/Navbar"
import Pricing from "./components/Pricing"
import Reviews from "./components/Reviews"
import Testimonial from "./components/Testimonial"

function App() {
  return (
    <main className="font-sans">
      <Navbar/>
      <Hero/>
      <Reviews/>
      <HowItWorks/>
      <Analytics/>
      <Analysis/>
      <Pricing/>
      <Testimonial/>
      <Feature/>
      <Footer/>
    </main>
  )
}

export default App