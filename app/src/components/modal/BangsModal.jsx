import {useContext, useEffect} from "react";

import titleSK from "../../assets/Modal/Bangs/BangsTitleSK.png"
import titleENG from "../../assets/Modal/Bangs/BangsTitleENG.png"
import titleHUN from "../../assets/Modal/Bangs/BangsTitleHUN.png"

import product1 from "../../assets/Modal/Bangs/BangModalImage1.png"
import product2 from "../../assets/Modal/Bangs/BangModalImage2.png"
import product3 from "../../assets/Modal/Bangs/BangModalImage3.png"
import product4 from "../../assets/Modal/Bangs/BangModalImage4.png"
import product5 from "../../assets/Modal/Bangs/BangModalImage5.jpg"
import product6 from "../../assets/Modal/Bangs/BangModalImage6.jpg"

import {ModalContext} from "../../context/ModalContext.jsx";
import {LanguageContext} from "../../context/LanguageContext.jsx";

import translations from "../../utility/Trsanslations.js";

import "./styles/BangsModal.css"

const BangsModal = () =>{

    const{isBangsModalOpen, setIsBangsModalOpen} = useContext(ModalContext);
    const{selectedLanguage} = useContext(LanguageContext);

    const currentTranslations = translations[selectedLanguage] || translations.SK;
    const modalText = currentTranslations?.modal.bangs || translations.SK.modal.bangs;

    let title;

    if (selectedLanguage === "SK"){
        title = titleSK
    }else if (selectedLanguage === "ENG"){
        title = titleENG;
    }else if (selectedLanguage === "HUN"){
        title = titleHUN;
    }else{
        title = titleSK;
    }

    const productImages = [
        { id: 1, src: product1, alt: "Bangs Product 1" },
        { id: 2, src: product2, alt: "Bangs Product 2" },
        { id: 3, src: product3, alt: "Bangs Product 3" },
        { id: 4, src: product4, alt: "Bangs Product 4" },
        { id: 5, src: product5, alt: "Bangs Product 5" },
        { id: 6, src: product6, alt: "Bangs Product 6" },
    ];

    useEffect(() => {
        if (isBangsModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isBangsModalOpen]);

    if (!isBangsModalOpen) return null;

    return (
        <div className="b-modal-overlay" onClick={()=>setIsBangsModalOpen(false)}>
            <div className="b-modal-content" onClick={(e) => e.stopPropagation()}>

                <button className="b-close-button" onClick={()=> setIsBangsModalOpen(false)}>
                    <span className="b-close-icon">✕</span>
                </button>

                <div className="b-modal-body">
                    <div className="b-left-content">
                        <div className="b-modal-title">
                            <img src={title} alt="Bangs" className="b-title-image" />
                        </div>

                        <div className="b-text-content">
                            <p>{modalText.text}</p>
                        </div>
                    </div>

                    <div className="b-right-content">
                        <div className="b-image-grid">
                            {productImages.map((product) => (
                                <div
                                    key={product.id}
                                    className="b-grid-item"
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

export default BangsModal;