import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    // load data/ useState
    const [products, setProducts] = useState([]);
    const[cart, setCart] = useState([]);
    // useEffect
    useEffect(() => {
    // fetch
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
    },[])
    // handelClick 
    const handlelAddToCart = (product) =>{
        
        const newCart = [...cart, product]
        setCart(newCart)
        
    }
    return (
    <div className='shop-container'>
        {/* product-container */}
        <div className="products-container">
        {
            products.map(product => <Product 
                key={product.id}
                product={product}
                handlelCart={handlelAddToCart}
                ></Product>)
        }
        
        </div>
        {/* cart-container */}
        <div className="cart-container">

        <Cart cart={cart}></Cart>

        </div>
    </div>
    );
};

export default Shop;