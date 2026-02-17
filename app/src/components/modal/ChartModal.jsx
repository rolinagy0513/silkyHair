import {useContext, useEffect} from "react";

import {ModalContext} from "../../context/ModalContext.jsx";
import {LanguageContext} from "../../context/LanguageContext.jsx";

import image1 from "../../assets/Modal/Chart/ChartModalImage1.png"
import image2 from "../../assets/Modal/Chart/ChartModalImage2.png"

import "./styles/ChartModal.css"
import translations from "../../utility/Trsanslations.js";

const ChartModal = () =>{

    const{isChartModalOpen, setIsChartModalOpen} = useContext(ModalContext);
    const{selectedLanguage} = useContext(LanguageContext);

    const currentTranslations = translations[selectedLanguage] || translations.SK;
    const modalText = currentTranslations?.modal.chart || translations.SK.modal.chart;

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
                        <h2 className="ch-modal-title">{modalText.title}</h2>
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