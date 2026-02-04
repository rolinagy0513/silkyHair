import {useContext, useEffect} from "react";

import titleSK from "../../assets/Modal/Cosmethics/CosmeticsTitleSK.png"
import titleENG from "../../assets/Modal/Cosmethics/CosmeticsTitleENG.png"
import titleHUN from "../../assets/Modal/Cosmethics/CosmeticsTitleHUN.png"

import {ModalContext} from "../../context/ModalContext.jsx";
import {LanguageContext} from "../../context/LanguageContext.jsx";
import translations from "../../utility/Trsanslations.js";

import "./styles/CosmeticsModal.css"

const CosmeticsModal = () =>{

    const{isCosmeticsModalOpen, setIsCosmeticsModalOpen} = useContext(ModalContext);
    const{selectedLanguage} = useContext(LanguageContext);

    const currentTranslations = translations[selectedLanguage] || translations.SK;
    const modalText = currentTranslations?.modal.cosmetics || translations.SK.modal.cosmetics;

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


    useEffect(() => {
        if (isCosmeticsModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isCosmeticsModalOpen]);

    if (!isCosmeticsModalOpen) return null;

    return (
        <div className="cos-modal-overlay" onClick={()=>setIsCosmeticsModalOpen(false)}>
            <div className="cos-modal-content" onClick={(e) => e.stopPropagation()}>

                <button className="cos-close-button" onClick={()=> setIsCosmeticsModalOpen(false)}>
                    <span className="cos-close-icon">✕</span>
                </button>

                <div className="cos-modal-body">
                    <div className="cos-left-content">
                        <div className="cos-modal-title">
                            <img src={title} alt="Cosmetics" className="cos-title-image" />
                        </div>

                        <div className="cos-text-content">
                            <p>{modalText.text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CosmeticsModal