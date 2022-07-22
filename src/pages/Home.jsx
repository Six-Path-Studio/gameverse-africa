
import Hero from "../components/Hero"
import AboutUs from "../components/About"
import Join from "../components/Join"
import Partners from "../components/Partners"
import Footer from "../components/Footer"
import Slides from "../components/Slider"


import Img from "../images/activities/slide.png"
import Img1 from "../images/activities/slide1.png"
import Img2 from "../images/activities/slide2.png"
import Img3 from "../images/activities/slide3.png"

import Img4 from "../images/concentration/img1.png"
import Img5 from "../images/concentration/img2.png"
import Img6 from "../images/concentration/img3.png"
import Img7 from "../images/concentration/img4.png"


function Home() {
  
const images = [
  {img: Img},
  {img: Img1},
  {img: Img2},
  {img: Img3},
];
const images2 = [
  {img: Img4},
  {img: Img5},
  {img: Img6},
  {img: Img7},
];
  return (
    <div className="App">
      <Hero /> 
      <AboutUs />
      <Slides images={images} title="Activities" />
      <Join title="Join Us to for an opportunity to interact with different gamer and game creators" text="Registartion would soon be active" btn="Coming Soon" />
      <Slides images={images2} title="Concentration" />
      <Partners />
      <Footer />
    </div>
  )
}

export default Home
