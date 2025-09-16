import React from 'react'
import MainLayout from './layouts/MainLayout'
import { ProductProvider } from './context/productContext'

function App() {
    return (
        <>
            <ProductProvider>
                <MainLayout />
            </ProductProvider>
        </>
    )
}

export default App