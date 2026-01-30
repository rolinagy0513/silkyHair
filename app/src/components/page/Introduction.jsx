import profile from "../../assets/profile.png";
import name from "../../assets/name.png";

import {useContext} from "react";
import {LanguageContext} from "../../context/LanguageContext.jsx";
import translations from "../../utility/Trsanslations.js";

import "./styles/Introduction.css"

const Introduction = () =>{

    const {selectedLanguage} = useContext(LanguageContext);


    const currentTranslations = translations[selectedLanguage] || translations.SK;
    const intro = currentTranslations?.introduction || translations.SK.introduction;

    return(
        <section id="introduction" className="hero-section">
            <div className="profile-container">
                <div className="profile-left">
                    <div className="profile-image-wrapper">
                        <img src={profile} alt="Profile" className="profile-main-image" />
                    </div>
                </div>
                <div className="profile-right">
                    <div className="profile-header">
                        {selectedLanguage === "HUN" ? (
                            <>
                                <img src={name} alt="name" className="profile-name-image" />
                                <span className="profile-greeting">{intro.title}</span>
                            </>
                        ) : (
                            <>
                                <span className="profile-greeting">{intro.title}</span>
                                <img src={name} alt="name" className="profile-name-image" />
                            </>
                        )}
                    </div>
                    <div className="profile-description">
                        <p>
                            {intro.text}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Introduction;