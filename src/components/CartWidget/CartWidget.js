import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import cart from './assets/cart.png';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    return (
        <Link to="/cart" className="CartWidget">
            <img className="CartImg" src={cart} alt="cart-widget" height={20}/>
            {totalQuantity > 0 && <span className="TotalQuantity">{totalQuantity}</span>}
        </Link>
    );
};

export default CartWidget;
