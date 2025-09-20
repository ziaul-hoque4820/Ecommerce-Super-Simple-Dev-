import React, { useContext } from 'react'
import CartItem from '../components/CartItem'
import { ProductContext } from '../context/productContext';
import { getProduct } from '../data/products';
import PaymentSummary from '../components/PaymentSummary';

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

                <PaymentSummary />
            </div>
        </div>
    )
}

export default Checkout