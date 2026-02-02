import React, {useContext, useEffect} from "react";

import titleSK from "../../assets/NaturalHairTitleSK.png";
import titleENG from "../../assets/NaturalHairTitleENG.png";
import titleHUN from "../../assets/NaturalHairTitleHUN.png"

import product1 from "../../assets/NaturalHairModalImage1.png";
import product2 from "../../assets/NaturalHairModalImage2.png";
import product3 from "../../assets/NaturalHairModalImage3.png";
import product4 from "../../assets/NaturalHairModalImage4.png";
import product5 from "../../assets/NaturalHairModalImage5.png";
import product6 from "../../assets/NaturalHairModalImage6.png";

import {ModalContext} from "../../context/ModalContext.jsx";
import {LanguageContext} from "../../context/LanguageContext.jsx";

import translations from "../../utility/Trsanslations.js";

import "./styles/NaturalHairModal.css";

const NaturalHairModal = () => {

    const{isNaturalHairModalOpen, setIsNaturalHairModalOpen} = useContext(ModalContext);
    const{selectedLanguage} = useContext(LanguageContext);

    const currentTranslations = translations[selectedLanguage] || translations.SK;
    const modalText = currentTranslations?.modal.naturalHair || translations.SK.modal.naturalHair;

    let title;

    if (selectedLanguage === "SK"){
        title = titleSK;
    }else if (selectedLanguage === "ENG"){
        title = titleENG;
    }else if (selectedLanguage === "HUN"){
        title = titleHUN;
    }else{
        title = titleSK;
    }

    const productImages = [
        { id: 1, src: product1, alt: "Natural Hair Product 1" },
        { id: 2, src: product2, alt: "Natural Hair Product 2" },
        { id: 3, src: product3, alt: "Natural Hair Product 3" },
        { id: 4, src: product4, alt: "Natural Hair Product 4" },
        { id: 5, src: product5, alt: "Natural Hair Product 5" },
        { id: 6, src: product6, alt: "Natural Hair Product 6" },
    ];

    useEffect(() => {
        if (isNaturalHairModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isNaturalHairModalOpen]);

    if (!isNaturalHairModalOpen) return null;

    return (
        <div className="nh-modal-overlay" onClick={()=>setIsNaturalHairModalOpen(false)}>
            <div className="nh-modal-content" onClick={(e) => e.stopPropagation()}>

                <button className="nh-close-button" onClick={()=> setIsNaturalHairModalOpen(false)}>
                    <span className="nh-close-icon">✕</span>
                </button>

                <div className="nh-modal-body">
                    <div className="nh-left-content">
                        <div className="nh-modal-title">
                            <img src={title} alt="Natural Hair" className="nh-title-image" />
                        </div>

                        <div className="nh-text-content">
                            <p>{modalText.text}</p>
                        </div>
                    </div>

                    <div className="nh-right-content">
                        <div className="nh-image-grid">
                            {productImages.map((product) => (
                                <div
                                    key={product.id}
                                    className="nh-grid-item"
                                >
                                    <img src={product.src} alt={product.alt} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NaturalHairModal;