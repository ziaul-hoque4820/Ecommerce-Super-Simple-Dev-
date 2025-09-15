import React from 'react'
import logo from '../assets/images/logo-white.png'
import logoMobile from '../assets/images/mobile-logo-white.png'
import searchIcon from '../assets/images/icons/search-icon.png'
import cartIcon from '../assets/images/icons/cart-icon.png'


function Header() {
    return (
        <div className="header">
            <div className="left-section">
                <a href="index.html" className="header-link">
                    <img className="logo"
                        src={logo} />
                    <img className="mobile-logo"
                        src={logoMobile} />
                </a>
            </div>

            <div className="middle-section">
                <input className="search-bar" type="text" placeholder="Search" />

                <button className="search-button">
                    <img className="search-icon" src={searchIcon} />
                </button>
            </div>

            <div className="right-section">
                <a className="orders-link header-link" href="orders.html">

                    <span className="orders-text">Orders</span>
                </a>

                <a className="cart-link header-link" href="checkout.html">
                    <img className="cart-icon" src={cartIcon} />
                    <div className="cart-quantity">3</div>
                    <div className="cart-text">Cart</div>
                </a>
            </div>
        </div>
    )
}

export default Header