import contactImage from "../../assets/contactImage.png";

import "./styles/ContactUs.css"
import {useContext} from "react";
import {LanguageContext} from "../../context/LanguageContext.jsx";
import translations from "../../utility/Trsanslations.js";

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
                        <p>Mail:Info@silkyhair.eu</p>
                        <p>Tel: +421904 148 648</p>
                        <br />
                        <p><strong>{contacts.invoice}</strong></p>
                        <p>Bono s.r.o.</p>
                        <p>IČO: 46448736</p>
                        <p>DIČ: 2023394138</p>
                        <p>IČ DPH: SK2023394138</p>
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