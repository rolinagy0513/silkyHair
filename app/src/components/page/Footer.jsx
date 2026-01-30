import logo from "../../assets/logo.png";

import "./styles/Footer.css"

const Footer = () =>{

    return(
        <footer className="footer">
            <div className="footer-content">

                <img src={logo} alt="Logo" />
                <p className="copyright">Copyright ©SILKYHAIR. Všetky práva vyhradené.</p>
            </div>
        </footer>
    )

}

export default Footer;