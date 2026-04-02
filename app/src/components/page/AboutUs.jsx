import {useContext} from "react";

import introductionSk from "../../assets/Page/Introduction/IntroductionSk.png";
import introductionHun from "../../assets/Page/Introduction/introductionHun.png";
import introductionEng from "../../assets/Page/Introduction/introductionEng.png";

import aboutUsImage from "../../assets/Page/Other/AboutUsImage.jpg"

import {LanguageContext} from "../../context/LanguageContext.jsx";

import translations from "../../utility/Trsanslations.js";

import "./styles/AboutUs.css"

const AboutUs = () =>{

    const {selectedLanguage} = useContext(LanguageContext);

    const currentTranslations = translations[selectedLanguage] || translations.SK;
    const about = currentTranslations?.aboutUs || translations.SK.aboutUs;

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
            <img src={aboutUsImage} alt="aboutUsImage" className="about-section-content-image"/>
        </section>
    )

}

export default AboutUs;