import {LanguageProvider} from "./context/LanguageContext.jsx";
import {ProductsProvider} from "./context/ProductsContext.jsx";

import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import Introduction from "./components/Introduction.jsx";
import AboutUs from "./components/AboutUs.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Footer from "./components/Footer.jsx";

import HairTypes from "./components/HairTypes.jsx";
import Products from "./components/Products.jsx";
import BeforeAfter from "./components/BeforeAfter.jsx";
import ScrollAnimatedSection from "./components/ScrollAnimatedSection.jsx"

import "./App.css"

function App() {

  return (
      <LanguageProvider>
        <ProductsProvider>
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

            <Footer/>
          </div>
        </ProductsProvider>
      </LanguageProvider>
  )
}

export default App