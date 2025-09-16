import React from 'react'
import { products } from '../data/products'
import ProductCart from '../components/ProductCart'

function Home() {
    return (
        <div className="home-page">
            <div className="products-grid">
                {
                    products.map(product => (
                        <ProductCart key={product.id} product={product} />
                    ))
                }
            </div>
        </div>
    )
}

export default Home