import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';
import "./Cart.css";

const Cart = () => {
    const { cart, clearCart, totalQuantity, totalPrice } = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <div>
                <h1 className="NoItems">There are no items in your bag.</h1>
                <Link to="/">
                    <button className="ContinueShopping">CONTINUE SHOPPING </button>
                </Link>
                
            </div>
        );
    }

    return (
        <div>
            { cart.map(p => <CartItem key={p.id} {...p}/> )}

            <h3 className="Total">
                <span> Your total amount is: $ {parseFloat(totalPrice())} </span>
            </h3>
            <button className="EmptyCart" onClick={clearCart}>EMPTY CART</button>
            <Link to="/checkout">
                <button className="Checkout">CHECKOUT</button>
            </Link>
        </div>
    );

};

export default Cart







