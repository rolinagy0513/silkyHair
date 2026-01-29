import naturalHair from "../assets/Natural-Hair.png";
import clipTop from "../assets/Clip-Top.png";
import clipIn from "../assets/Cip-In.png";
import invisibleTapes from "../assets/Invisible-Tapes.png";
import bangs from "../assets/Bangs.png";
import braids from "../assets/Braids.png";
import chart from "../assets/Hair-Color-Chart.png";

import "./styles/Products.css"

const Products = () =>{

    return(
        <section id="products" className="products-section">
            <h2>Produkty</h2>
            <div className="products-grid">
                <div className="product-card">
                    <div className="product-image">
                        <img src={naturalHair} alt="natural-hair" />
                    </div>
                    <h3>Vlasy bez ukončenia</h3>
                </div>
                <div className="product-card">
                    <div className="product-image">
                        <img src={clipTop} alt="clip-top" />
                    </div>
                    <h3>Clip Top</h3>
                </div>
                <div className="product-card">
                    <div className="product-image">
                        <img src={clipIn} alt="clip-in" />
                    </div>
                    <h3>Clip In</h3>
                </div>
                <div className="product-card">
                    <div className="product-image">
                        <img src={invisibleTapes} alt="invisible-tapes" />
                    </div>
                    <h3>Invisible Tapes</h3>
                </div>
                <div className="product-card">
                    <div className="product-image">
                        <img src={bangs} alt="bangs" />
                    </div>
                    <h3>Ofiny</h3>
                </div>
                <div className="product-card">
                    <div className="product-image">
                        <img src={braids} alt="braids" />
                    </div>
                    <h3>Copy na suchy zips a snurku</h3>
                </div>
                <div className="product-card">
                    <div className="product-image"></div>
                    <h3>Pramene vlasov – keratínové alebo trubičkové spoje</h3>
                </div>
                <div className="product-card">
                    <div className="product-image">
                        <img src={chart} alt="chart" />
                    </div>
                    <h3>Vzorkovinky farieb Invisible tape</h3>
                </div>
                <div className="product-card">
                    <div className="product-image"></div>
                    <h3>Vlasová kozmetika</h3>
                </div>
            </div>
        </section>
    )

}

export default Products;