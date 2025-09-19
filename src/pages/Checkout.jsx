import React, { useContext } from 'react'
import CartItem from '../components/CartItem'
import { ProductContext } from '../context/productContext';
import { getProduct } from '../data/products';

function Checkout() {
    const { cartData } = useContext(ProductContext);

    return (
        <div className="checkout-page">
            <div className="page-title">Review your order</div>

            <div className="checkout-grid">
                <div className="order-summary">
                    {
                        cartData.map((cartItem) => {
                            const productId = cartItem.productId;
                            const matchingProduct = getProduct(productId);

                            return <CartItem
                                key={cartItem.productId}
                                onMatchingProduct={matchingProduct}
                                cartItem={cartItem}

                            />
                        })
                    }
                </div>

                <div className="payment-summary">
                    <div className="payment-summary-title">
                        Payment Summary
                    </div>

                    <div className="payment-summary-row">
                        <div>Items (3):</div>
                        <div className="payment-summary-money">$42.75</div>
                    </div>

                    <div className="payment-summary-row">
                        <div>Shipping &amp; handling:</div>
                        <div className="payment-summary-money">$4.99</div>
                    </div>

                    <div className="payment-summary-row subtotal-row">
                        <div>Total before tax:</div>
                        <div className="payment-summary-money">$47.74</div>
                    </div>

                    <div className="payment-summary-row">
                        <div>Estimated tax (10%):</div>
                        <div className="payment-summary-money">$4.77</div>
                    </div>

                    <div className="payment-summary-row total-row">
                        <div>Order total:</div>
                        <div className="payment-summary-money">$52.51</div>
                    </div>

                    <button className="place-order-button button-primary">
                        Place your order
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Checkout