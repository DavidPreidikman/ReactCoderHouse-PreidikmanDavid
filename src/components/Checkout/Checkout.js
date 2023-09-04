import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import logo from "./logo/logo.png";
import "./Checkout.css";

const Checkout = () => {
    const { cart, clearCart, totalPrice } = useContext(CartContext);
    const [orderId, setOrderId] = useState('');
    const [showForm, setShowForm] = useState(true);

    const handleConfirmOrder = (userData) => {
        const orderNumber = Math.random().toString(36).substr(2, 8).toUpperCase();
        setOrderId(orderNumber);
        clearCart();
        setShowForm(false);
    }

    return (
        <div>
            {showForm ? (
                <div>
                    <h3 className="Total">
                        <span> YOUR TOTAL AMOUNT IS: $ {parseFloat(totalPrice())} </span>
                    </h3>
                    <div>
                        <CheckoutForm onConfirm={handleConfirmOrder} />
                    </div>
                 </div>
           
            ) : (
                <div>
                    <h2 className="ThankYou"> Thank you for buying with us. </h2>
                    <h2 className="OrderNumber"> Your order number is: {orderId} </h2>
                    <img clasName="Logo" src={logo} alt="goat-logo"/>
                </div>
            )}
        </div>
    );
};

export default Checkout;



