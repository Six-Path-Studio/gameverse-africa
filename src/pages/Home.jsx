
import Hero from "../components/Hero"
import AboutUs from "../components/About"
import Join from "../components/Join"
import Partners from "../components/Partners"
import Footer from "../components/Footer"
import Slides from "../components/Slider"

function Home() {

  return (
    <div className="App">
      <Hero /> 
      <AboutUs />
      <Slides />
      <Join title="Join Us to for an opportunity to interact with different gamer and game creators" text="Registartion would soon be active" btn="Coming Soon" />
      <Partners />
      <Footer />
    </div>
  )
}

export default Home
