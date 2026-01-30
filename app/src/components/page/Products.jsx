import {useContext} from "react";

import naturalHair from "../../assets/Natural-Hair.png";
import clipTop from "../../assets/Clip-Top.png";
import clipIn from "../../assets/Cip-In.png";
import invisibleTapes from "../../assets/Invisible-Tapes.png";
import bangs from "../../assets/Bangs.png";
import braids from "../../assets/Braids.png";
import chart from "../../assets/Hair-Color-Chart.png";

import {LanguageContext} from "../../context/LanguageContext.jsx";

import translations from "../../utility/Trsanslations.js";

import "./styles/Products.css"

const Products = () =>{

    const {selectedLanguage} = useContext(LanguageContext);

    const currentTranslations = translations[selectedLanguage] || translations.SK;
    const products = currentTranslations?.products || translations.SK.products;

    return(
        <section id="products" className="products-section">
            <h2>{products.productTitle}</h2>
            <div className="products-grid">
                <div className="product-card">
                    <div className="product-image">
                        <img src={naturalHair} alt="natural-hair" />
                    </div>
                    <h3>{products.product1}</h3>
                </div>
                <div className="product-card">
                    <div className="product-image">
                        <img src={clipTop} alt="clip-top" />
                    </div>
                    <h3>{products.product2}</h3>
                </div>
                <div className="product-card">
                    <div className="product-image">
                        <img src={clipIn} alt="clip-in" />
                    </div>
                    <h3>{products.product3}</h3>
                </div>
                <div className="product-card">
                    <div className="product-image">
                        <img src={invisibleTapes} alt="invisible-tapes" />
                    </div>
                    <h3>{products.product4}</h3>
                </div>
                <div className="product-card">
                    <div className="product-image">
                        <img src={bangs} alt="bangs" />
                    </div>
                    <h3>{products.product5}</h3>
                </div>
                <div className="product-card">
                    <div className="product-image">
                        <img src={braids} alt="braids" />
                    </div>
                    <h3>{products.product6}</h3>
                </div>
                <div className="product-card">
                    <div className="product-image"></div>
                    <h3>{products.product7}</h3>
                </div>
                <div className="product-card">
                    <div className="product-image">
                        <img src={chart} alt="chart" />
                    </div>
                    <h3>{products.product8}</h3>
                </div>
                <div className="product-card">
                    <div className="product-image"></div>
                    <h3>{products.product9}</h3>
                </div>
            </div>
        </section>
    )

}

export default Products;