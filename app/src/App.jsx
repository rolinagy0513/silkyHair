import {LanguageProvider} from "./context/LanguageContext.jsx";
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