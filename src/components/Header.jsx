import React, { useContext } from 'react'
import logo from '../assets/images/logo-white.png'
import logoMobile from '../assets/images/mobile-logo-white.png'
import searchIcon from '../assets/images/icons/search-icon.png'
import cartIcon from '../assets/images/icons/cart-icon.png'
import { ProductContext } from '../context/productContext'
import { Link } from 'react-router-dom'


function Header() {
    const { cartData } = useContext(ProductContext);
    return (
        <div className="header">
            <div className="left-section">
                <Link to={"/home"} className="header-link">
                    <img className="logo"
                        src={logo} />
                    <img className="mobile-logo"
                        src={logoMobile} />
                </Link>
            </div>

            <div className="middle-section">
                <input className="search-bar" type="text" placeholder="Search" />

                <button className="search-button">
                    <img className="search-icon" src={searchIcon} />
                </button>
            </div>

            <div className="right-section">
                <Link to={"/orders"} className="orders-link header-link">
                    <span className="orders-text">Orders</span>
                </Link>

                <Link to={"/checkout"} className="cart-link header-link">
                    <img className="cart-icon" src={cartIcon} />
                    <div className="cart-quantity">
                        {cartData.length > 0 ?
                            cartData.reduce((total, item) => total + item.quantity, 0) :
                            0
                        }
                    </div>
                    <div className="cart-text">Cart</div>
                </Link>
            </div>
        </div>
    )
}

export default Header