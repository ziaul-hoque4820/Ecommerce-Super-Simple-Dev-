import React, { useContext } from 'react'
import { ProductContext } from '../context/productContext';
import { getProduct } from '../data/products';
import { deliveryOptions } from '../data/deliveryOptions';
import { formatCurrency } from '../utils/utils';

function PaymentSummary() {
    const { cartData } = useContext(ProductContext);

    // Payment Calculation 
    const itemsTotal = cartData.reduce((sum, item) => {
        const product = getProduct(item.productId);
        return sum + (product.priceCents * item.quantity);
    }, 0);

    const shippingTotal = cartData.reduce((sum, item) => {
        const option = deliveryOptions.find(deliveryOption => deliveryOption.id === (item.deliveryOptionId || "1"));
        return sum + option.priceCents;
    }, 0);

    const totalBeforeTax = itemsTotal + shippingTotal;
    const tax = totalBeforeTax * 0.1;
    const orderTotal = totalBeforeTax + tax;


    return (
        <div className="payment-summary">
            <div className="payment-summary-title">
                Payment Summary
            </div>

            <div className="payment-summary-row">
                <div>Items ({cartData.length > 0 ?
                    cartData.reduce((total, item) => total + item.quantity, 0) :
                    0
                }):</div>
                <div className="payment-summary-money">${formatCurrency(itemsTotal)}</div>
            </div>

            <div className="payment-summary-row">
                <div>Shipping &amp; handling:</div>
                <div className="payment-summary-money">${formatCurrency(shippingTotal)}</div>
            </div>

            <div className="payment-summary-row subtotal-row">
                <div>Total before tax:</div>
                <div className="payment-summary-money">${formatCurrency(totalBeforeTax)}</div>
            </div>

            <div className="payment-summary-row">
                <div>Estimated tax (10%):</div>
                <div className="payment-summary-money">${formatCurrency(tax)}</div>
            </div>

            <div className="payment-summary-row total-row">
                <div>Order total:</div>
                <div className="payment-summary-money">${formatCurrency(orderTotal)}</div>
            </div>

            <button className="place-order-button button-primary">
                Place your order
            </button>
        </div>
    )
}

export default PaymentSummary