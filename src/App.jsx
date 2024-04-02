/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { About } from "./components/About/About"
import { Banner } from "./components/Banner/Banner"
import { Footer } from "./components/Footer/Footer"
import { Hero } from "./components/Hero/Hero"
import { Navbar } from "./components/Navbar"
import { Popup } from "./components/Popup/Popup"
import { WhyChoose } from "./components/WhyChoose/WhyChoose"
import AOS from 'aos'
import "aos/dist/aos.css"


function App() {
  
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    })
    AOS.refresh();
  }, [])
  
 
  const handlePopup = () => {
    setShowPopup(true);
  }

  return (
    <div className="overflow-x-hidden ">
      <Navbar handlePopup={handlePopup}/>
      <Hero/>
      <Banner/>
      <WhyChoose/>
      <About handlePopup={handlePopup}/>
      <Banner/>
      <Footer/>
      <Popup showPopup={showPopup} setShowPopup={setShowPopup}/>
    </div>
  )
}

export default App           
