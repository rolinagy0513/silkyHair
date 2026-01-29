import {useState, createContext, useRef} from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {

    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('SK');

    const languages = [
        { code: 'SK', name: 'Slovenčina' },
        { code: 'ENG', name: 'English' },
        { code: 'HUN', name: 'Magyar' },
    ];

    const languageRef = useRef(null);

    return (
        <LanguageContext.Provider value={{
            isLanguageOpen, setIsLanguageOpen,
            selectedLanguage, setSelectedLanguage,
            languages, languageRef
        }}>
            {children}
        </LanguageContext.Provider>
    );
};