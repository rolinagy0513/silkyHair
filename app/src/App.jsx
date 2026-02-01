import {useContext} from "react";

import Header from "./components/page/Header.jsx";
import Navbar from "./components/page/Navbar.jsx";
import Introduction from "./components/page/Introduction.jsx";
import AboutUs from "./components/page/AboutUs.jsx";
import ContactUs from "./components/page/ContactUs.jsx";
import Footer from "./components/page/Footer.jsx";

import HairTypes from "./components/page/HairTypes.jsx";
import Products from "./components/page/Products.jsx";
import BeforeAfter from "./components/page/BeforeAfter.jsx";
import ScrollAnimatedSection from "./components/page/ScrollAnimatedSection.jsx"

import NaturalHairModal from "./components/modal/NaturalHairModal.jsx";
import {ModalContext} from "./context/ModalContext.jsx";

import "./App.css"
import ClipTopModal from "./components/modal/ClipTopModal.jsx";

function App() {

    //todo: Le kell momdani az adobe subscription-t is szóval valami prinstrceen-ek kellenek meg a képek a modal-ok ból.
   //todo: ClipTopModal még nem jó minden media weidth-en szóval azt meg kell változtatni
  //todo: Többi modal mehet ugyan úgy aztán language selector ezekhez mind



  const {isNaturalHairModalOpen, isClipTopModalOpen} = useContext(ModalContext);

  return (

          <div className="main-page-container">

            <Header/>
            <Navbar/>
            <Introduction/>

            <ScrollAnimatedSection id="about">
              <AboutUs/>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection id="hair-types">
              <HairTypes/>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection id="products">
              <Products/>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection id="before-after">
              <BeforeAfter/>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection id="contact">
              <ContactUs/>
            </ScrollAnimatedSection>

            {isNaturalHairModalOpen &&(
                <NaturalHairModal/>
            )}

           {isClipTopModalOpen &&(
               <ClipTopModal/>
           )}

            <Footer/>

          </div>
  )
}

export default App