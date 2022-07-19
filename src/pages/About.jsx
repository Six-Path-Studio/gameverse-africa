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
import Story from "../images/story.png"

function About() {

  return (
    <div className="App">
      <div className="hero">
        <HeaderNav />
        <div className="lg:my-32">
          <AboutUs />
        </div>
      </div>
      <div className="lg:flex lg:w-2/3 mx-auto sm:p-10">
        <div>
          <div className="title lg:text-3xl sm:text-xl my-5">Our Story</div>
          <div className="text-base text sm:text-xs">
            Games have been here since the history of man, over the years it has evolved to the level of advancement  it enjoys today. Adoption of technology has made life easy and over time we are experiencing groundbreaking emerging technologies.
            <br /><br />
            While the emergence of technology and its subsequent  adoption in Africa has numerous benefits,  the unforeseen result is a decline or loss in our cultural heritage.
            <br /><br />
            The continent Africa was formerly  known as one of the richest cultures in the world, however, technology adoption and globalization has made the continent embrace more of the western values, leading to a gross neglect of our values and cultural attributes.
            <br /><br />
            The good news is, a compromise can be achieved. Using  Black Panther as a case study, We see in the movie that it is possible to have a technologically advanced African society which still maintains their rich cultural heritage.
            To take part in making this a reality beyond fiction, Gameverse Africa Conference 22 would take a stance and showcase the rich African cultural heritage through gaming.
          </div>
        </div>
        <div className="w-full my-auto lg:ml-10 sm:mt-10">
          <img src={Story} alt="" />
        </div>
      </div>
      <Join title="Old Meets New" text="Welcome to Gameverse Africa Conference 22,
      where Olds Meets New." btn="#OldMeetsNew" />

      <div className="lg:w-2/3 my-16 sm:m-10">
        <div className="lg:flex lg:w-1/2 justify-between mx-auto">
          <img className="lg:m-3 sm:my-2" src={Img1} alt="" />
          <img className="lg:m-3 sm:my-2" src={Img2} alt="" />
        </div>
        <div className="lg:flex lg:w-1/2 justify-between mx-auto">
          <img className="lg:m-3 sm:my-2" src={Img3} alt="" />
          <img className="lg:m-3 sm:my-2" src={Img4} alt="" />
        </div>
        <div className="lg:flex lg:w-1/2 justify-between mx-auto">
          <img className="lg:m-3 sm:my-2" src={Img5} alt="" />
          <img className="lg:m-3 sm:my-2" src={Img6} alt="" />
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
