import before1 from "../../assets/before1.png";
import after1 from "../../assets/after1.png";
import before2 from "../../assets/before2.png";
import after2 from "../../assets/after2.png";
import before3 from "../../assets/before3.png";
import after3 from "../../assets/after3.png";

import "./styles/BeforeAfter.css"
import {useContext} from "react";
import {LanguageContext} from "../../context/LanguageContext.jsx";
import translations from "../../utility/Trsanslations.js";

const BeforeAfter = () =>{

    const {selectedLanguage} = useContext(LanguageContext);

    const currentTranslations = translations[selectedLanguage] || translations.SK;
    const beforeAfter = currentTranslations?.beforeAfter || translations.SK.beforeAfter;

    return(
        <section id="before-after" className="before-after-section">
            <h2>{beforeAfter.title}</h2>

            <div className="before-after-row">
                <h3>{beforeAfter.productName}</h3>
                <div className="before-after-grid">
                    <div className="ba-image-container">
                        <div className="ba-image">
                            <img src={before1} alt="before1"/>
                        </div>
                        <p>{beforeAfter.before}</p>
                    </div>
                    <div className="ba-image-container">
                        <div className="ba-image">
                            <img src={after1} alt="after1"/>
                        </div>
                        <p>{beforeAfter.after}</p>
                    </div>
                </div>
            </div>

            <div className="before-after-row">
                <h3>{beforeAfter.productName}</h3>
                <div className="before-after-grid">
                    <div className="ba-image-container">
                        <div className="ba-image">
                            <img src={before2} alt="before2"/>
                        </div>
                        <p>{beforeAfter.before}</p>
                    </div>
                    <div className="ba-image-container">
                        <div className="ba-image">
                            <img src={after2} alt="after1"/>
                        </div>
                        <p>{beforeAfter.after}</p>
                    </div>
                </div>
            </div>


            <div className="before-after-row">
                <h3>{beforeAfter.productName}</h3>
                <div className="before-after-grid">
                    <div className="ba-image-container">
                        <div className="ba-image">
                            <img src={before3} alt="before3"/>
                        </div>
                        <p>{beforeAfter.before}</p>
                    </div>
                    <div className="ba-image-container">
                        <div className="ba-image">
                            <img src={after3} alt="after1"/>
                        </div>
                        <p>{beforeAfter.after}</p>
                    </div>
                </div>
            </div>

        </section>
    )

}

export default BeforeAfter;