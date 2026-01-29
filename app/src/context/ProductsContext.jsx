import {useState, createContext, useRef} from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {

    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const productsRef = useRef(null);

    const productCategories = [
        "Vlasy bez ukončenia",
        "Clip top",
        "Clip in",
        "Invisible Tapes",
        "Ofiny",
        "Copy na suchy zips a šňurku",
        "Pramene vlasov",
        "Vlasová kozmetika",
        "Vzrokovinky Farieb invisible tape"
    ];

    return (
        <ProductsContext.Provider value={{
            isProductsOpen, setIsProductsOpen,
            productsRef, productCategories
        }}>
            {children}
        </ProductsContext.Provider>
    );
};