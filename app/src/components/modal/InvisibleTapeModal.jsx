import {useContext, useEffect} from "react";

import title from "../../assets/Modal/InvisibleTape/InvisibleTapesTitle.png"

import product1 from "../../assets/Modal/InvisibleTape/InvisibleTapesModalImage1.png"
import product2 from "../../assets/Modal/InvisibleTape/InvisibleTapesModalImage2.png"
import product3 from "../../assets/Modal/InvisibleTape/InvisibleTapesModalImage3.png"
import product4 from "../../assets/Modal/InvisibleTape/InvisibleTapesModalImage4.png"
import product5 from "../../assets/Modal/InvisibleTape/InvisibleTapesModalImage5.png"
import product6 from "../../assets/Modal/InvisibleTape/InvisibleTapesModalImage6.png"
import product7 from "../../assets/Modal/InvisibleTape/InvisibleTapesModalImage7.png"
import product8 from "../../assets/Modal/InvisibleTape/InvisibleTapesModalImage8.png"

import {ModalContext} from "../../context/ModalContext.jsx";
import {LanguageContext} from "../../context/LanguageContext.jsx";

import translations from "../../utility/Trsanslations.js";

import "./styles/InvisibleTapeModal.css"

const InvisibleTapeModal = () => {

    const{isInvisibleTapeModalOpen, setIsInvisibleTapeModalOpen} = useContext(ModalContext);
    const{selectedLanguage} = useContext(LanguageContext);

    const currentTranslations = translations[selectedLanguage] || translations.SK;
    const modalText = currentTranslations?.modal.invisibleTape || translations.SK.modal.invisibleTape;

    const productImages = [
        { id: 1, src: product1, alt: "Invisible Tape Product 1", type: "cover" },
        { id: 2, src: product2, alt: "Invisible Tape Product 2", type: "cover" },
        { id: 3, src: product3, alt: "Invisible Tape Product 3", type: "cover" },
        { id: 4, src: product4, alt: "Invisible Tape Product 4", type: "cover" },
        { id: 5, src: product5, alt: "Invisible Tape Product 5", type: "cover" },
        { id: 6, src: product6, alt: "Invisible Tape Product 6", type: "cover" },
        { id: 7, src: product7, alt: "Invisible Tape Product 7", type: "contain" },
        { id: 8, src: product8, alt: "Invisible Tape Product 8", type: "contain" },
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
                                    className={`it-grid-item it-grid-item--${product.type}`}
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