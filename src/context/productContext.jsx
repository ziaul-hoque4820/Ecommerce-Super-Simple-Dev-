import { createContext, useState } from "react";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
    const [cartData, setCartData] = useState([]);

    return (
        <ProductContext.Provider value={{ cartData, setCartData }}>
            {children}
        </ProductContext.Provider>
    )
};