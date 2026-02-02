import {useContext, useEffect} from "react";

import titleSK from "../../assets/BraidsTitleSK.png"
import titleENG from "../../assets/BraidsTitleENG.png"
import titleHUN from "../../assets/BraidsTitleHUN.png"

import product1 from "../../assets/BraidsModalImage1.png"
import product2 from "../../assets/BraidsModalImage2.png"
import product3 from "../../assets/BraidsModalImage3.png"
import product4 from "../../assets/BraidsModalImage4.png"
import product5 from "../../assets/BraidsModalImage5.png"
import product6 from "../../assets/BraidsModalImage6.png"

import {ModalContext} from "../../context/ModalContext.jsx";
import {LanguageContext} from "../../context/LanguageContext.jsx";

import translations from "../../utility/Trsanslations.js";

import "./styles/BraidsModal.css"

const BraidsModal = () =>{

    const{isBraidsModalOpen, setIsBraidsModalOpen} = useContext(ModalContext);
    const{selectedLanguage} = useContext(LanguageContext);

    const currentTranslations = translations[selectedLanguage] || translations.SK;
    const modalText = currentTranslations?.modal.braids || translations.SK.modal.braids;

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
        { id: 1, src: product1, alt: "Braids 1" },
        { id: 2, src: product2, alt: "Braids 2" },
        { id: 3, src: product3, alt: "Braids 3" },
        { id: 4, src: product4, alt: "Braids 4" },
        { id: 5, src: product5, alt: "Braids 5" },
        { id: 6, src: product6, alt: "Braids 6" },
    ];

    useEffect(() => {
        if (isBraidsModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isBraidsModalOpen]);

    if (!isBraidsModalOpen) return null;

    return (
        <div className="br-modal-overlay" onClick={()=>setIsBraidsModalOpen(false)}>
            <div className="br-modal-content" onClick={(e) => e.stopPropagation()}>

                <button className="br-close-button" onClick={()=> setIsBraidsModalOpen(false)}>
                    <span className="br-close-icon">✕</span>
                </button>

                <div className="br-modal-body">
                    <div className="br-left-content">
                        <div className="br-modal-title">
                            <img src={title} alt="Braids" className="br-title-image" />
                        </div>

                        <div className="br-text-content">
                           <p>{modalText.text}</p>
                        </div>
                    </div>

                    <div className="br-right-content">
                        <div className="br-image-grid">
                            {productImages.map((product) => (
                                <div
                                    key={product.id}
                                    className="br-grid-item"
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

export default BraidsModal