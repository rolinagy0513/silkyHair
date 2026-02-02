import {useContext, useEffect} from "react";

import title from "../../assets/InvisibleTapesTitle.png"

import product1 from "../../assets/InvisibleTapesModalImage1.png"
import product2 from "../../assets/InvisibleTapesModalImage2.png"
import product3 from "../../assets/InvisibleTapesModalImage3.png"
import product4 from "../../assets/InvisibleTapesModalImage4.png"
import product5 from "../../assets/InvisibleTapesModalImage5.png"
import product6 from "../../assets/InvisibleTapesModalImage6.png"

import {ModalContext} from "../../context/ModalContext.jsx";
import {LanguageContext} from "../../context/LanguageContext.jsx";

import "./styles/InvisibleTapeModal.css"
import translations from "../../utility/Trsanslations.js";

const InvisibleTapeModal = () => {

    const{isInvisibleTapeModalOpen, setIsInvisibleTapeModalOpen} = useContext(ModalContext);
    const{selectedLanguage} = useContext(LanguageContext);

    const currentTranslations = translations[selectedLanguage] || translations.SK;
    const modalText = currentTranslations?.modal.invisibleTape || translations.SK.modal.invisibleTape;

    const productImages = [
        { id: 1, src: product1, alt: "Invisible Tape Product 1" },
        { id: 2, src: product2, alt: "Invisible Tape Product 2" },
        { id: 3, src: product3, alt: "Invisible Tape Product 3" },
        { id: 4, src: product4, alt: "Invisible Tape Product 4" },
        { id: 5, src: product5, alt: "Invisible Tape Product 5" },
        { id: 6, src: product6, alt: "Invisible Tape Product 6" },
    ];


    useEffect(() => {
        if (isInvisibleTapeModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isInvisibleTapeModalOpen]);

    if (!isInvisibleTapeModalOpen) return null;

    return (
        <div className="it-modal-overlay" onClick={()=>setIsInvisibleTapeModalOpen(false)}>
            <div className="it-modal-content" onClick={(e) => e.stopPropagation()}>

                <button className="it-close-button" onClick={()=> setIsInvisibleTapeModalOpen(false)}>
                    <span className="it-close-icon">✕</span>
                </button>

                <div className="it-modal-body">
                    <div className="it-left-content">
                        <div className="it-modal-title">
                            <img src={title} alt="Invisible Tapes" className="it-title-image" />
                        </div>

                        <div className="it-text-content">
                            <p>{modalText.text}</p>
                        </div>
                    </div>

                    <div className="it-right-content">
                        <div className="it-image-grid">
                            {productImages.map((product) => (
                                <div
                                    key={product.id}
                                    className="it-grid-item"
                                >
                                    <img src={product.src} alt={product.alt} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InvisibleTapeModal;