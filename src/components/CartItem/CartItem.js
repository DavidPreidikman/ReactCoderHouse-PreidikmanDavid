import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './CartItem.css';

const CartItem = ({ img, name, price, quantity, id }) => {
    const { removeItem } = useContext(CartContext);

    const subtotal = price * quantity;

    return (
        <div className="CartItem">
            <div className="CartItemCell name">Product: {name}</div>
            <div className="CartItemCell price">Price: $ {price}</div>
            <div className="CartItemCell quantity">Quantity: {quantity}</div>
            <div className="CartItemCell subtotal">Subtotal: $ {subtotal}</div>
            <div className="CartItemCell">
                <button onClick={() => removeItem(id)}>REMOVE</button>
            </div>
        </div>
    );
};

export default CartItem;



