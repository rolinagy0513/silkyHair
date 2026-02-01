import {useState, createContext, useRef} from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {

    const[isNaturalHairModalOpen, setIsNaturalHairModalOpen] = useState(false);
    const[isBangsModalOpen, setIsBangsModalOpen] = useState(false);
    const[isBraidsModalOpen, setIsBraidsModalOpen] = useState(false);
    const[isKeratinModalOpen, setIsKeratinModalOpen] = useState(false);
    const[isClipInModalOpen, setIsClipInModalOpen] = useState(false);
    const[isClipTopModalOpen, setIsClipTopModalOpen] = useState(false);
    const[isInvisibleTapeModalOpen, setIsInvisibleTapeModalOpen] = useState(false);


    return (
        <ModalContext.Provider value={{
            isNaturalHairModalOpen, setIsNaturalHairModalOpen,
            isBangsModalOpen, setIsBangsModalOpen,
            isBraidsModalOpen, setIsBraidsModalOpen,
            isKeratinModalOpen, setIsKeratinModalOpen,
            isClipInModalOpen, setIsClipInModalOpen,
            isClipTopModalOpen, setIsClipTopModalOpen,
            isInvisibleTapeModalOpen, setIsInvisibleTapeModalOpen
        }}>
            {children}
        </ModalContext.Provider>
    );
};