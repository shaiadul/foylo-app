import React from 'react';

const Cart = ({cart}) => {
    return (
    <div>
        <h4>this is order summery</h4>
        <p>Selected Itmes: {cart.length}</p>
    </div>
    );
};

export default Cart;