import React, { useContext, useState } from 'react'
import { formatCurrency, getProductImageUrl } from '../utils/utils'
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js'
import { deliveryOptions } from '../data/deliveryOptions'
import { ProductContext } from '../context/productContext';

function CartItem({ onMatchingProduct, cartItem }) {
    const { cartData, setCartData } = useContext(ProductContext);
    const [selectedOption, setSelectedOption] = useState(cartItem.deliveryOptionId || "1");

    // state for Update quantity 
    const [isEditing, setIsEditing] = useState(false);
    const [newQuantity, setNewQuantity] = useState(cartItem.quantity);

    const currentDelivery = deliveryOptions.find(opt => opt.id === selectedOption);

    // Today's date and delivery date 
    const today = dayjs();
    const deliveryDate = today.add(currentDelivery.deliveryDays, 'days');
    const dateString = deliveryDate.format('dddd, MMMM D');

    // Change Shippeing Option 
    const handleOptionChange = (e) => {
        const newOptionId = e.target.value;
        setSelectedOption(newOptionId);
        handleUpdateDelivery(cartItem.productId, newOptionId);
    };

    // Updated delivery option 
    const handleUpdateDelivery = (productId, newOptionId) => {
        const updateCart = cartData.map(item =>
            item.productId === productId
                ? { ...item, deliveryOptionId: newOptionId }
                : item
        );

        setCartData(updateCart);
    };

    // Delete product cart item
    const handleDeleteItem = (productId) => {
        const updatedCart = cartData.filter(item => item.productId !== productId);
        setCartData(updatedCart);
    };

    const handleSaveQuantity = (productId) => {
        if (newQuantity < 1) return;
        const updateCart = cartData.map(item =>
            item.productId === productId
                ? { ...item, quantity: Number(newQuantity) }
                : item
        );

        setCartData(updateCart);
        setIsEditing(false);
    }



    return (
        <div className="cart-item-container">
            <div className="delivery-date">
                Delivery date: {dateString}
            </div>

            <div className="cart-item-details-grid">
                <img className="product-image"
                    src={getProductImageUrl(onMatchingProduct.image)} />

                <div className="cart-item-details">
                    <div className="product-name">
                        {onMatchingProduct.name}
                    </div>
                    <div className="product-price">
                        ${formatCurrency(onMatchingProduct.priceCents)}
                    </div>
                    <div className="product-quantity">
                        <span>
                            Quantity: <span className="quantity-label">{cartItem.quantity}</span>
                        </span>

                        {isEditing ? (
                            <>
                                <input
                                    type="number"
                                    value={newQuantity}
                                    min="1"
                                    onChange={(e) => setNewQuantity(e.target.value)}
                                    style={{ width: "40px", margin: "0 8px" }}
                                />
                                <button onClick={() => handleSaveQuantity(cartItem.productId)}>
                                    Save
                                </button>
                            </>
                        ) : (
                            <>
                                <span
                                    onClick={() => setIsEditing(true)}
                                    className="update-quantity-link link-primary"
                                >
                                    Update
                                </span>
                                <span
                                    onClick={() => handleDeleteItem(cartItem.productId)}
                                    className="delete-quantity-link link-primary"
                                >
                                    Delete
                                </span>
                            </>
                        )}
                    </div>

                </div>

                <div className="delivery-options">
                    <div className="delivery-options-title">
                        Choose a delivery option:
                    </div>
                    {
                        deliveryOptions.map(option => {
                            const today = dayjs();
                            const deliveryDate = today.add(option.deliveryDays, 'days');
                            const dateString = deliveryDate.format('dddd, MMMM D');

                            const priceString = option.priceCents === 0
                                ? "FREE Shipping"
                                : `$${formatCurrency(option.priceCents)} - Shipping`;

                            return (
                                <div key={option.id} className="delivery-option">
                                    <input type="radio"
                                        className="delivery-option-input"
                                        name={`delivery-option-${cartItem.productId}`}
                                        value={option.id}
                                        checked={selectedOption === option.id}
                                        onChange={handleOptionChange}
                                    />
                                    <div>
                                        <div className="delivery-option-date">
                                            {dateString}
                                        </div>
                                        <div className="delivery-option-price">
                                            {priceString}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default CartItem