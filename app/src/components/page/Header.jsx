import {useContext, useEffect} from "react";

import logo from "../../assets/logo.png";

import {LanguageContext} from "../../context/LanguageContext.jsx";

import "./styles/Header.css"

const Header  = () =>{

    const {
        isLanguageOpen, setIsLanguageOpen,
        selectedLanguage, setSelectedLanguage,
        languages, languageRef,
        isMobileMenuOpen, setIsMobileMenuOpen
    } = useContext(LanguageContext);


    useEffect(() => {
        const handleClickOutside = (event) => {

            if (languageRef.current && !languageRef.current.contains(event.target)) {
                setIsLanguageOpen(false);
            }

        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLanguageSelect = (languageCode) => {
        setSelectedLanguage(languageCode);
        setIsLanguageOpen(false);
    };


    return(
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="header-right">
                <button
                    className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div className="language-selector" ref={languageRef}>
                    <button
                        className="language-toggle"
                        onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                        aria-label="Select language"
                    >
                        <span className="current-language">{selectedLanguage}</span>
                        <span className={`language-arrow ${isLanguageOpen ? 'open' : ''}`}>▼</span>
                    </button>

                    {isLanguageOpen && (
                        <div className="language-dropdown">
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    className={`language-option ${selectedLanguage === lang.code ? 'selected' : ''}`}
                                    onClick={() => handleLanguageSelect(lang.code)}
                                >
                                    <span className="language-code">{lang.code}</span>
                                    <span className="language-name">{lang.name}</span>
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </header>
    )

}

export default Header;