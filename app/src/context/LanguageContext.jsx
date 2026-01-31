import {useState, createContext, useRef} from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {

    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('SK');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const[isModalOpen, setIsModalOpen] = useState(false);

    const languages = [
        { code: 'SK', name: 'Slovenčina' },
        { code: 'ENG', name: 'English' },
        { code: 'HUN', name: 'Magyar' },
    ];


    //todo: Túl nagyok a textek a mobile view-ban, kell placeholder az üres képekre
    //todo: Modal a productoknak, language selectorral.

    const languageRef = useRef(null);

    return (
        <LanguageContext.Provider value={{
            isLanguageOpen, setIsLanguageOpen,
            selectedLanguage, setSelectedLanguage,
            languages, languageRef,
            isMobileMenuOpen, setIsMobileMenuOpen,
            isModalOpen, setIsModalOpen
        }}>
            {children}
        </LanguageContext.Provider>
    );
};