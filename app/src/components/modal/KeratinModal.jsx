import {useContext, useEffect} from "react";

import titleSK from "../../assets/Modal/Keratin/KeratinTitleSK.png"
import titleENG from "../../assets/Modal/Keratin/KeratinTitleENG.png"
import titleHUN from "../../assets/Modal/Keratin/KeratinTitleHUN.png"

import {ModalContext} from "../../context/ModalContext.jsx";
import {LanguageContext} from "../../context/LanguageContext.jsx";

import translations from "../../utility/Trsanslations.js";

import "./styles/KeratinModal.css"

const KeratinModal = () =>{

    const{isKeratinModalOpen, setIsKeratinModalOpen} = useContext(ModalContext);
    const{selectedLanguage} = useContext(LanguageContext);

    const currentTranslations = translations[selectedLanguage] || translations.SK;
    const modalText = currentTranslations?.modal.keratin || translations.SK.modal.keratin;

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
        if (isKeratinModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isKeratinModalOpen]);

    if (!isKeratinModalOpen) return null;

    return (
        <div className="k-modal-overlay" onClick={()=>setIsKeratinModalOpen(false)}>
            <div className="k-modal-content" onClick={(e) => e.stopPropagation()}>

                <button className="k-close-button" onClick={()=> setIsKeratinModalOpen(false)}>
                    <span className="k-close-icon">✕</span>
                </button>

                <div className="k-modal-body">
                    <div className="k-content-wrapper">
                        <div className="k-modal-title">
                            <img src={title} alt="Keratin" className="k-title-image" />
                        </div>

                        <div className="k-text-content">
                            <p>{modalText.text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KeratinModal;