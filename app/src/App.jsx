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

import {ModalContext} from "./context/ModalContext.jsx";

import NaturalHairModal from "./components/modal/NaturalHairModal.jsx";

import ClipTopModal from "./components/modal/ClipTopModal.jsx";
import BangsModal from "./components/modal/BangsModal.jsx";
import ClipInModal from "./components/modal/ClipInModal.jsx";
import InvisibleTapeModal from "./components/modal/InvisibleTapeModal.jsx";
import BraidsModal from "./components/modal/BraidsModal.jsx";
import KeratinModal from "./components/modal/KeratinModal.jsx";

import "./App.css"
import ChartModal from "./components/modal/ChartModal.jsx";
import CosmeticsModal from "./components/modal/CosmeticsModal.jsx";

function App() {

  const {
      isNaturalHairModalOpen, isClipTopModalOpen,
      isBangsModalOpen, isClipInModalOpen,
      isInvisibleTapeModalOpen, isBraidsModalOpen,
      isKeratinModalOpen, isChartModalOpen,
      isCosmeticsModalOpen,
  } = useContext(ModalContext);

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

          {isBangsModalOpen &&(
                <BangsModal/>
          )}

          {isClipInModalOpen &&(
              <ClipInModal/>
          )}

          {isInvisibleTapeModalOpen &&(
              <InvisibleTapeModal/>
          )}

          {isBraidsModalOpen &&(
              <BraidsModal/>
          )}

          {isKeratinModalOpen &&(
              <KeratinModal/>
          )}

          {isChartModalOpen &&(
              <ChartModal/>
          )}

          {isCosmeticsModalOpen &&(
              <CosmeticsModal/>
          )}

              <Footer/>

          </div>
  )
}

export default App