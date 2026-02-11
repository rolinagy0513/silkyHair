import {useContext} from "react";

import profile from "../../assets/Page/Other/profile.png";
import name from "../../assets/Page/Other/name.png";

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
                                <div className="profile-description">
                                    <p>
                                        <img src={name} alt="name" className="profile-name-image" />
                                        {intro.title}
                                        {intro.text}
                                    </p>
                                </div>
                            </>
                        ) : (
                            <>

                                <div className="profile-description">
                                    <p>{intro.title}
                                    <img src={name} alt="name" className="profile-name-image" />
                                    {intro.text}
                                    </p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Introduction;