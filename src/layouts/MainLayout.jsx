import React, { Children } from 'react'
import Headers from '../components/Header'
import Footer from '../components/Footer'
import Home from '../pages/Home'

function MainLayout() {
    return (
        <div>
            <Headers />
            <main>
                <Home />
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout