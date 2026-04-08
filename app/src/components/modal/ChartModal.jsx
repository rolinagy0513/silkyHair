import React, {useContext, useEffect} from "react";

import titleSK from "../../assets/Modal/Chart/ChartTitleSK.png"
import titleHUN from "../../assets/Modal/Chart/ChartTitleHUN.png"
import titleENG from "../../assets/Modal/Chart/ChartTitleENG.png"

import image1 from "../../assets/Modal/Chart/ChartModalImage1.png"
import image2 from "../../assets/Modal/Chart/ChartModalImage2.png"

import {ModalContext} from "../../context/ModalContext.jsx";
import {LanguageContext} from "../../context/LanguageContext.jsx";

import "./styles/ChartModal.css"
import translations from "../../utility/Trsanslations.js";

const ChartModal = () =>{

    const{isChartModalOpen, setIsChartModalOpen} = useContext(ModalContext);
    const{selectedLanguage} = useContext(LanguageContext);

    const currentTranslations = translations[selectedLanguage] || translations.SK;
    const modalText = currentTranslations?.modal.chart || translations.SK.modal.chart;

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

    useEffect(() => {
        if (isChartModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isChartModalOpen]);

    if (!isChartModalOpen) return null;

    return (
        <div className="ch-modal-overlay" onClick={()=>setIsChartModalOpen(false)}>
            <div className="ch-modal-content" onClick={(e) => e.stopPropagation()}>

                <button className="ch-close-button" onClick={()=> setIsChartModalOpen(false)}>
                    <span className="ch-close-icon">✕</span>
                </button>

                <div className="ch-modal-body">
                    <div className="ch-title-container">
                        <img src={title} alt="Color chart" className="ch-title-image" />
                    </div>

                    <div className="ch-images-container">

                        <div className="ch-image-item">
                            <div className="ch-image-wrapper">
                                <img src={image1} alt="L'Oreal iNOA Chart 1" className="ch-image" />
                            </div>
                            <div className="ch-image-text">
                                <p>{modalText.imgText1}</p>
                            </div>
                        </div>

                        <div className="ch-image-item">
                            <div className="ch-image-wrapper">
                                <img src={image2} alt="L'Oreal iNOA Chart 2" className="ch-image" />
                            </div>
                            <div className="ch-image-text">
                                <p>{modalText.imgText2}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChartModal;