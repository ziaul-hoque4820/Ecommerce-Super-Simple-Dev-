import React, { useContext, useState } from 'react'
import { formatCurrency, getProductImageUrl, getRatingImageUrl } from '../utils/utils'
import { ProductContext } from '../context/productContext';
import checkmarkIcon from '../assets/images/icons/checkmark.png'

function ProductCart({ product }) {
    const { cartData, setCartData } = useContext(ProductContext);
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [isAdded, setIsAdded] = useState(false)

    const handleAddToCart = (productId) => {
        const matchingProduct = cartData.find(item => item.productId === productId);

        let updatedCart;
        if (matchingProduct) {
            // Update existing product quantity
            updatedCart = cartData.map(item =>
                item.productId === productId
                    ? { ...item, quantity: item.quantity + selectedQuantity }
                    : item
            );
        } else {
            // Add new product with quantity and deliveryOption
            updatedCart = [
                ...cartData,
                {
                    productId: productId,
                    quantity: selectedQuantity,
                    deliveryOptionId: '1'
                }
            ];
        }

        // Update Context 
        setCartData(updatedCart);

        // Reset selectedQuantity back to 1
        setSelectedQuantity(1);

        // Show "Added" messege temporarily 
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 700);

    };


    return (
        <div
            className="product-container">
            <div className="product-image-container">
                <img className="product-image"
                    src={getProductImageUrl(product.image)} />
            </div>

            <div className="product-name limit-text-to-2-lines">
                {product.name}
            </div>

            <div className="product-rating-container">
                <img className="product-rating-stars"
                    src={getRatingImageUrl(`${product.rating.stars * 10}.png`)} />
                <div className="product-rating-count link-primary">
                    {product.rating.count}
                </div>
            </div>

            <div className="product-price">
                ${formatCurrency(product.priceCents)}
            </div>

            <div className="product-quantity-container">
                <select
                    value={selectedQuantity}
                    onChange={(e) => setSelectedQuantity(Number(e.target.value))}
                >
                    {Array.from({ length: 10 }, (_, i) => i + 1).map(n => (
                        <option key={n} value={n}>
                            {n}
                        </option>
                    ))}
                </select>
            </div>

            <div className="product-spacer"></div>

            <div className={`added-to-cart ${isAdded ? 'show' : 'hide'}`}>
                <img src={checkmarkIcon} />
                Added
            </div>

            <button
                onClick={() => handleAddToCart(product.id)}
                className="add-to-cart-button button-primary">
                Add to Cart
            </button>
        </div>
    )
}

export default ProductCart