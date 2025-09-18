import React, { Children } from 'react'
import Headers from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

function MainLayout() {
    return (
        <div>
            <Headers />
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout