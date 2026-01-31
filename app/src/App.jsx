import {LanguageContext, LanguageProvider} from "./context/LanguageContext.jsx";
import {ProductsProvider} from "./context/ProductsContext.jsx";

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

import "./App.css"
import {useContext} from "react";
import NaturalHairModal from "./components/modal/NaturalHairModal.jsx";

function App() {

  //todo: bug ha a modal meg van nyitva mobil-on akkor overlapolôja a hamburger menüt. Meg túl nagy a mobilon a modal és ott még a menü is szarul néz ki.
  //todo: többi modal.
  //todo: más state nevek más contextben.

  const {isModalOpen} = useContext(LanguageContext);

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

            {isModalOpen &&(
                <NaturalHairModal/>
            )}

            <Footer/>

          </div>
  )
}

export default App