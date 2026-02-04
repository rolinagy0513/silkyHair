import "./styles/HairTypes.css"
import {useContext} from "react";
import {LanguageContext} from "../../context/LanguageContext.jsx";
import translations from "../../utility/Trsanslations.js";

const HairTypes = () =>{

    const {selectedLanguage} = useContext(LanguageContext);

    const currentTranslations = translations[selectedLanguage] || translations.SK;
    const typesOfHair = currentTranslations?.typesOfHair || translations.SK.typesOfHair;

    return(
        <section id="hair-types" className="hair-types-section">
            <h2 className="hair-types-section-title">{typesOfHair.title}</h2>
            <div className="hair-types-grid">
                <div className="hair-type-card">
                    <h3 className="hair-type-card-title">{typesOfHair.europeanTitle}</h3>
                    <div className="hair-type-card-description">
                        <p>{typesOfHair.europeanText}</p>
                    </div>
                </div>
                <div className="hair-type-card">
                    <h3 className="hair-type-card-title">{typesOfHair.russianTitle}</h3>
                    <div className="hair-type-card-description">
                        <p>{typesOfHair.russianText}</p>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default HairTypes;