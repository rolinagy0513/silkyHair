import {useContext, useEffect} from "react";

import {ModalContext} from "../../context/ModalContext.jsx";
import {LanguageContext} from "../../context/LanguageContext.jsx";

import image1 from "../../assets/ChartModalImage1.png"
import image2 from "../../assets/ChartModalImage2.png"

import "./styles/ChartModal.css"

const ChartModal = () =>{

    const{isChartModalOpen, setIsChartModalOpen} = useContext(ModalContext);
    const{selectedLanguage} = useContext(LanguageContext);

    let title;

    if (selectedLanguage === "SK"){
        title = "L'Oreal iNOA vzrokovník"
    }else if (selectedLanguage === "ENG"){
        title = "L'Oreal iNOA hair color chart";
    }else if (selectedLanguage === "HUN"){
        title = "L'Oreal iNOA színminta";
    }else{
        title = "L'Oreal iNOA vzrokovník";
    }

    const chartImages = [
        { id: 1, src: image1, alt: "L'Oreal iNOA Chart 1" },
        { id: 2, src: image2, alt: "L'Oreal iNOA Chart 2" },
    ];

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
                        <h2 className="ch-modal-title">{title}</h2>
                    </div>

                    <div className="ch-images-container">
                        {chartImages.map((image) => (
                            <div key={image.id} className="ch-image-wrapper">
                                <img src={image.src} alt={image.alt} className="ch-image" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChartModal;