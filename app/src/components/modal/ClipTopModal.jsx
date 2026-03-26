import React, {useContext, useEffect} from "react";

import titleDual from "../../assets/Modal/ClipTop/ClipTopTitleSK-ENG.png";
import titleHUN from "../../assets/Modal/ClipTop/ClipTopTitleHUN2.png";

import product1 from "../../assets/Modal/ClipTop/ClipTopModalImage1.png";
import product2 from "../../assets/Modal/ClipTop/ClipTopModalImage2.png";
import product3 from "../../assets/Modal/ClipTop/ClipTopModalImage3.png";
import product4 from "../../assets/Modal/ClipTop/ClipTopModalImage4.png";
import product5 from "../../assets/Modal/ClipTop/ClipTopModalImage5.png";
import product6 from "../../assets/Modal/ClipTop/ClipTopModalImage6.png";

import {ModalContext} from "../../context/ModalContext.jsx";
import {LanguageContext} from "../../context/LanguageContext.jsx";

import translations from "../../utility/Trsanslations.js";

import "./styles/ClipTopModal.css";

const ClipTopModal = () => {

    const{isClipTopModalOpen, setIsClipTopModalOpen} = useContext(ModalContext);
    const {selectedLanguage} = useContext(LanguageContext);

    const currentTranslations = translations[selectedLanguage] || translations.SK;
    const modalText = currentTranslations?.modal.clipTop || translations.SK.modal.clipTop;

    let title;

    if (selectedLanguage === "SK" || selectedLanguage === "ENG"){
        title = titleDual
    }else if (selectedLanguage === "HUN"){
        title = titleHUN;
    }else{
        title = titleDual;
    }

    const productImages = [
        { id: 1, src: product1, alt: "Clip Top Product 1" },
        { id: 2, src: product2, alt: "Clip Top Product 2" },
        { id: 3, src: product3, alt: "Clip Top Product 3" },
        { id: 4, src: product4, alt: "Clip Top Product 4" },
        { id: 5, src: product5, alt: "Clip Top Product 5" },
        { id: 6, src: product6, alt: "Clip Top Product 6" },
    ];

    useEffect(() => {
        if (isClipTopModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isClipTopModalOpen]);

    if (!isClipTopModalOpen) return null;


    return (
        <div className="ct-modal-overlay" onClick={()=>setIsClipTopModalOpen(false)}>
            <div className="ct-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="ct-close-button" onClick={()=> setIsClipTopModalOpen(false)}>
                    <span className="ct-close-icon">✕</span>
                </button>

                <div className="ct-modal-body">
                    <div className="ct-left-content">
                        <div className="ct-modal-title">
                            <img src={title} alt="Clip Top" className="ct-title-image" />
                        </div>

                        <div className="ct-text-content">
                            <p>{modalText.text}</p>
                        </div>
                    </div>

                    <div className="ct-right-content">
                        <div className="ct-image-grid">
                            {productImages.map((product) => (
                                <div
                                    key={product.id}
                                    className="ct-grid-item"
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

export default ClipTopModal;