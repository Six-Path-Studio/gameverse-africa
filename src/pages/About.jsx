import AboutUs from "../components/About"
import Join from "../components/Join"
import Footer from "../components/Footer"
import HeaderNav from "../components/HeaderNav"

import Img1 from "../images/old-meets-new/img1.png"
import Img2 from "../images/old-meets-new/img2.png"


import Img3 from "../images/old-meets-new/img3.png"
import Img4 from "../images/old-meets-new/img4.png"

import Img5 from "../images/old-meets-new/img5.png"
import Img6 from "../images/old-meets-new/img6.png"

function About() {

  return (
    <div className="App">
      <div className="hero">
        <HeaderNav />
        <div className="my-32">
          <AboutUs />
        </div>
      </div>
      <Join title="Old Meets New" text="Welcome to Gameverse Africa Conference 22,
      where Olds Meets New." btn="#OldMeetsNew" />

      <div className="lg:w-2/3 my-16">
        <div className="lg:flex lg:w-1/2 justify-between mx-auto">
          <img className="m-3" src={Img1} alt="" />
          <img className="m-3" src={Img2} alt="" />
        </div>
        <div className="lg:flex lg:w-1/2 justify-between mx-auto">
          <img className="m-3" src={Img3} alt="" />
          <img className="m-3" src={Img4} alt="" />
        </div>
        <div className="lg:flex lg:w-1/2 justify-between mx-auto">
          <img className="m-3" src={Img5} alt="" />
          <img className="m-3" src={Img6} alt="" />
        </div>
      </div>

      <div className="  my-20">
        <Join title="Join our Community on Discord" text="Click on the button below to join" btn="Discord Server" />
      </div>
      <Footer />
    </div>
  )
}

export default About
