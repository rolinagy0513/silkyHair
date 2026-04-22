import {useContext} from "react";

import contactImage from "../../assets/Page/Other/contactImage.png";

import {LanguageContext} from "../../context/LanguageContext.jsx";
import translations from "../../utility/Trsanslations.js";

import { FaInstagram } from "react-icons/fa";

import "./styles/ContactUs.css"

const ContactUs = () =>{

    const {selectedLanguage} = useContext(LanguageContext);
    const currentTranslations = translations[selectedLanguage] || translations.SK;
    const contacts = currentTranslations?.contacts || translations.SK.contacts;

    return(
        <section id="contact" className="contact-section">
            <div className="contact-content">
                <div className="contact-info">
                    <h2>{contacts.title}</h2>
                    <div className="contact-details">
                        <p><strong>Silky Hair</strong></p>
                        <p>info@silkyhair.eu</p>
                        <p>+421&nbsp;&nbsp;904&nbsp;&nbsp;143&nbsp;&nbsp;548</p>
                        <a href="https://www.instagram.com/silkyhair.eu" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                            silkyhair.eu
                        </a>
                        <br/>
                        <br/>
                        <p><strong>{contacts.invoice}</strong></p>
                        <p>Bono, s.r.o.</p>
                        <p>IČO:&nbsp;&nbsp;&nbsp;46489738</p>
                        <p>DIČ:&nbsp;&nbsp;&nbsp;2023399642</p>
                        <p>IČ DPH:&nbsp;&nbsp;&nbsp;SK2023399642</p>
                        <p>Budatínska 12, 851 06 Bratislava</p>
                        <p>Slovakia</p>
                    </div>
                </div>
                <div className="contact-image">
                    <img src={contactImage} alt="contact-image"/>
                </div>
            </div>
        </section>
    )

}

export default ContactUs;