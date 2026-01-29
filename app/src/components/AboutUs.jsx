import introductionSk from "../assets/IntroductionSk.png";
import introductionHun from "../assets/introductionHun.png";
import introductionEng from "../assets/introductionEng.png";

import "./styles/AboutUs.css"
import {useContext} from "react";
import {LanguageContext} from "../context/LanguageContext.jsx";
import translations from "../utility/Trsanslations.js";

const AboutUs = () =>{

    const {selectedLanguage} = useContext(LanguageContext);

    const currentTranslations = translations[selectedLanguage] || translations.SK;
    const about = currentTranslations?.aboutUs || translations.SK.aboutUs;

    //todo: Meg kell csinálni a text-et is ezen az oldalon, be kell rakni a HUN és ENG texteket

    let introduction;

    if (selectedLanguage === "SK"){
        introduction = introductionSk;
    } else if (selectedLanguage === "ENG"){
        introduction = introductionEng;
    } else if (selectedLanguage === "HUN"){
        introduction = introductionHun;
    } else {
        introduction = introductionSk;
    }

    return(
        <section id="about" className="about-section">
            <div className="about-section-image-swg">
                <img src={introduction} alt="introduction"/>
            </div>
            <div className="about-section-text">
                <p>
                    {about.paragraph1}
                </p>
                <p>
                    {about.paragraph2}
                </p>
                <p>
                    {about.paragraph3}
                </p>
                <p>
                    {about.portfolioTitle}
                </p>
                <ul>
                    {about.portfolioItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <p className="closing-text">
                    {about.closingText}
                </p>
            </div>
        </section>
    )

}

export default AboutUs;