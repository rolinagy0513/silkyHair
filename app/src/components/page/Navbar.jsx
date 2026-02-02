import {useContext, useEffect} from "react";

import {ProductsContext} from "../../context/ProductsContext.jsx";
import {LanguageContext} from "../../context/LanguageContext.jsx";
import {ModalContext} from "../../context/ModalContext.jsx";

import translations from "../../utility/Trsanslations.js";
import {scrollToSection} from "../../utility/Scrolling.js";

import "./styles/Navbar.css"

const Navbar = () =>{

    const {isProductsOpen, setIsProductsOpen, productsRef} = useContext(ProductsContext);
    const {selectedLanguage, isMobileMenuOpen, setIsMobileMenuOpen} = useContext(LanguageContext);

    const {
        setIsNaturalHairModalOpen, setIsClipTopModalOpen,
        setIsBangsModalOpen, setIsClipInModalOpen,
        setIsInvisibleTapeModalOpen,setIsBraidsModalOpen,
        setIsKeratinModalOpen, setIsChartModalOpen,
        setIsCosmeticsModalOpen,
    } = useContext(ModalContext);

    const currentTranslations = translations[selectedLanguage] || translations.SK;
    const menu = currentTranslations?.menu || translations.SK.menu;

    const productTypes = menu.productTypes || translations.SK.menu.productTypes;
    const productKeys = Object.keys(translations.SK.menu.productTypes);

    const handleNavClick = (sectionId, e) => {
        e.preventDefault();
        scrollToSection(sectionId);
        setIsProductsOpen(false);
        setIsMobileMenuOpen(false);
    };

    const handleProductClick = (index, e) => {
        e.preventDefault();
        if (index === 0) {
          setIsNaturalHairModalOpen(true)
        }
        if (index === 1){
            setIsClipTopModalOpen(true)
        }
        if (index === 2){
            setIsClipInModalOpen(true)
        }
        if (index === 3){
            setIsInvisibleTapeModalOpen(true)
        }
        if (index === 4){
            setIsBangsModalOpen(true)
        }
        if (index === 5){
            setIsBraidsModalOpen(true)
        }
        if (index === 6){
            setIsKeratinModalOpen(true)
        }
        if (index === 7){
            setIsChartModalOpen(true)
        }
        if (index === 8){
            setIsCosmeticsModalOpen(true)
        }
        else {
            scrollToSection(`product-${index}`);
        }
        setIsProductsOpen(false);
        setIsMobileMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (productsRef.current && !productsRef.current.contains(event.target)) {
                setIsProductsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    return(
        <nav className="main-nav">
            <div className={`nav-container ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                <a
                    href="#about"
                    onClick={(e) => handleNavClick('about', e)}
                >
                    {menu.aboutUs}
                </a>
                <a
                    href="#hair-types"
                    onClick={(e) => handleNavClick('hair-types', e)}
                >
                    {menu.hairTypes}
                </a>

                <div className="nav-dropdown" ref={productsRef}>
                    <button
                        className="nav-dropdown-toggle"
                        onClick={() => setIsProductsOpen(!isProductsOpen)}
                    >
                        {menu.products}
                        <span className={`dropdown-arrow ${isProductsOpen ? 'open' : ''}`}>▼</span>
                    </button>

                    {isProductsOpen && (
                        <div className="products-dropdown">
                            {productKeys.map((key, index) => {
                                const translatedCategory = productTypes[key] || translations.SK.menu.productTypes[key];
                                return (
                                    <a
                                        key={key}
                                        href={`#product-${index}`}
                                        className="product-category"
                                        onClick={(e) => handleProductClick(index, e)}
                                    >
                                        {translatedCategory}
                                    </a>
                                );
                            })}
                        </div>
                    )}
                </div>

                <a
                    href="#before-after"
                    onClick={(e) => handleNavClick('before-after', e)}
                >
                    {menu.beforeAfter}
                </a>
                <a
                    href="#contact"
                    onClick={(e) => handleNavClick('contact', e)}
                >
                    {menu.contacts}
                </a>
            </div>
        </nav>
    )

}

export default Navbar;