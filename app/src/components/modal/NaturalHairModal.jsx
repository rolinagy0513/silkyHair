import React, {useContext} from "react";
import title from "../../assets/NaturalHairTitle.png";
import product1 from "../../assets/NaturalHairModalImage1.png";
import product2 from "../../assets/NaturalHairModalImage2.png";
import product3 from "../../assets/NaturalHairModalImage3.png";
import product4 from "../../assets/NaturalHairModalImage4.png";
import product5 from "../../assets/NaturalHairModalImage5.png";
import product6 from "../../assets/NaturalHairModalImage6.png";
import "./styles/NaturalHairModal.css";
import {LanguageContext} from "../../context/LanguageContext.jsx";

const NaturalHairModal = () => {

    const {isModalOpen, setIsModalOpen} = useContext(LanguageContext);

    if (!isModalOpen) return null;

    const modalText = "V ponuke máme široký výber Európskych aj Ruských vlasov najvyššej kvality. Rôznych druhov, od rovných cez vlnité až po kučenavé. V rôznych dĺžkach a farbách, od prírodných odtieňov až po farbené. Všetky zvážky vlasov sú vyčesané od krátkych vlasov, čím garantujeme ich rovnakú hustotu po celej dĺžke bez stenčených koncov.";

    const productImages = [
        { id: 1, src: product1, alt: "Natural Hair Product 1" },
        { id: 2, src: product2, alt: "Natural Hair Product 2" },
        { id: 3, src: product3, alt: "Natural Hair Product 3" },
        { id: 4, src: product4, alt: "Natural Hair Product 4" },
        { id: 5, src: product5, alt: "Natural Hair Product 5" },
        { id: 6, src: product6, alt: "Natural Hair Product 6" },
    ];

    return (
        <div className="modal-overlay" onClick={()=>setIsModalOpen(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {/* Close button in top left corner */}
                <button className="close-button" onClick={()=> setIsModalOpen(false)}>
                    <span className="close-icon">✕</span>
                </button>

                <div className="modal-body">
                    <div className="left-content">
                        <div className="modal-title">
                            <img src={title} alt="Natural Hair" className="title-image" />
                        </div>

                        <div className="text-content">
                            <p>{modalText}</p>
                        </div>
                    </div>

                    <div className="right-content">
                        <div className="image-grid">
                            {productImages.map((product) => (
                                <div
                                    key={product.id}
                                    className="grid-item"
                                >
                                    <img src={product.src} alt={product.alt} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NaturalHairModal;