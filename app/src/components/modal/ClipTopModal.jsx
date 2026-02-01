import React, {useContext, useEffect} from "react";

import title from "../../assets/ClipTopModalTitle.png";
import product1 from "../../assets/ClipTopModalImage1.png";
import product2 from "../../assets/ClipTopModalImage2.png";
import product3 from "../../assets/ClipTopModalImage3.png";
import product4 from "../../assets/ClipTopModalImage4.png";
import product5 from "../../assets/ClipTopModalImage5.png";
import product6 from "../../assets/ClipTopModalImage6.png";

import {ModalContext} from "../../context/ModalContext.jsx";

import "./styles/ClipTopModal.css";

const ClipTopModal = () => {

    const{isClipTopModalOpen, setIsClipTopModalOpen} = useContext(ModalContext);

    if (!isClipTopModalOpen) return null;

    const modalText = `Clip top je inovatívny vlasový doplnok určený ženám, ktoré riešia rednutie alebo vypadávanie vlasov - Alopéciu v oblasti temena, no aj problémy s riedkymi a jemnými vlasmi.

Pomáha zakryť problematické miesta a zároveň dodáva vlasom objem a prirodzený vzhľad, pričom je priedušný, pokožka sa na hlave nepotí. Je pohodlný na nosenie, ľahko sa používa a dokonale splynie s vlastným vlasmi.

Vďaka nemu môžete rýchlo a bez námahy vylepšiť svoj vzhľad za pár sekúnd a cítiť sa sebavedomejšie.

Clip Top ponúkame v rózných farbách a variantoch, vďaka čomu si každá žena vie vybrať to, čo jej najviac vyhovuje.

Pomocou nenápadných klipov sa ľahko a rýchlo aplikuje a je vyrobený z kvalitných ľudských vlasov, ktoré môžete upravovať fúkaním, žehlením aj natáčaním. Je ideálnym riešením aj v dňoch, keď chcete vyzerať upravene bez umývania vlasov.`;

    const productImages = [
        { id: 1, src: product1, alt: "Clip Top Product 1" },
        { id: 2, src: product2, alt: "Clip Top Product 2" },
        { id: 3, src: product3, alt: "Clip Top Product 3" },
        { id: 4, src: product4, alt: "Clip Top Product 4" },
        { id: 5, src: product5, alt: "Clip Top Product 5" },
        { id: 6, src: product6, alt: "Clip Top Product 6" },
    ];

    useEffect(() => {
        if (isClipTopModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isClipTopModalOpen]);

    return (
        <div className="ct-modal-overlay" onClick={()=>setIsClipTopModalOpen(false)}>
            <div className="ct-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="ct-close-button" onClick={()=> setIsClipTopModalOpen(false)}>
                    <span className="ct-close-icon">✕</span>
                </button>

                <div className="ct-modal-body">
                    <div className="ct-left-content">
                        <div className="ct-modal-title">
                            <img src={title} alt="Clip Top" className="ct-title-image" />
                        </div>

                        <div className="ct-text-content">
                            <p>{modalText}</p>
                        </div>
                    </div>

                    <div className="ct-right-content">
                        <div className="ct-image-grid">
                            {productImages.map((product) => (
                                <div
                                    key={product.id}
                                    className="ct-grid-item"
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

export default ClipTopModal;