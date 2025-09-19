import { createContext, useState } from "react";
import { getCartDataFromStorage, setCartDataToStorage } from "../utils/utils";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
    const [cartData, setCartData] = useState(getCartDataFromStorage());
    console.log(cartData);

    // Always keep cartData updated
    const updateCartData = (newCartData) => {
        setCartData(newCartData);
        setCartDataToStorage(newCartData);
    }
    

    return (
        <ProductContext.Provider value={{ cartData, setCartData: updateCartData }}>
            {children}
        </ProductContext.Provider>
    )
};