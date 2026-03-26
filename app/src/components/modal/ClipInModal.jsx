import {useContext, useEffect} from "react";

import titleDual from "../../assets/Modal/ClipIn/ClipInTitleSK-ENG.png"
import titleHUN from "../../assets/Modal/ClipIn/ClipInTitleHUN2.png"

import product1 from "../../assets/Modal/ClipIn/CLipInModalImage1.png"
import product2 from "../../assets/Modal/ClipIn/ClipInModalImage2.png"

import {ModalContext} from "../../context/ModalContext.jsx";
import {LanguageContext} from "../../context/LanguageContext.jsx";

import translations from "../../utility/Trsanslations.js";

import "./styles/ClipInModal.css"

const ClipInModal = () =>{

    const{isClipInModalOpen, setIsClipInModalOpen} = useContext(ModalContext)
    const{selectedLanguage} = useContext(LanguageContext);

    const currentTranslations = translations[selectedLanguage] || translations.SK;
    const modalText = currentTranslations?.modal.clipIn || translations.SK.modal.clipIn;

    let title;

    if (selectedLanguage === "SK" || selectedLanguage === "ENG"){
        title = titleDual
    }else if (selectedLanguage === "HUN"){
        title = titleHUN;
    }else{
        title = titleDual;
    }

    const productImages = [
        { id: 1, src: product1, alt: "Clip In Product 1" },
        { id: 2, src: product2, alt: "Clip In Product 2" },
    ];

    useEffect(() => {
        if (isClipInModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isClipInModalOpen]);

    if (!isClipInModalOpen) return null;

    return (
        <div className="c-modal-overlay" onClick={()=>setIsClipInModalOpen(false)}>
            <div className="c-modal-content" onClick={(e) => e.stopPropagation()}>

                <button className="c-close-button" onClick={()=> setIsClipInModalOpen(false)}>
                    <span className="c-close-icon">✕</span>
                </button>

                <div className="c-modal-body">
                    <div className="c-left-content">
                        <div className="c-modal-title">
                            <img src={title} alt="Clip In" className="c-title-image" />
                        </div>

                        <div className="c-text-content">
                            <p>{modalText.text}</p>
                        </div>
                    </div>

                    <div className="c-right-content">
                        <div className="c-image-grid">
                            {productImages.map((product) => (
                                <div
                                    key={product.id}
                                    className="c-grid-item"
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

export default ClipInModal;