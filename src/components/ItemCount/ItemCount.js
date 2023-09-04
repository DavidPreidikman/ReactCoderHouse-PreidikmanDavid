import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, initial, onAdd }) => {
    
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    }

    const decrement = () => {
        if (quantity >= 1) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <div>
            <div id="Counter">
                <div className="column is-5 has-text-right">
                    <button className="DecrementButton" onClick={decrement}>
                        <p>-</p>
                    </button>
                </div>
                <div className="column is-2 has-text-centered">
                    <div>
                        <p className="quantity">{quantity}</p>
                    </div>
                </div>
                <div className="column is-5 has-text-left">
                    <button className="IncrementButton" onClick={increment}>
                        <p>+</p>
                    </button>
                </div>
            </div>
            <div className="column is-12 has-text-centered" style={{ marginTop: "10px" }}>
                <button className="AddToCart" onClick={() => onAdd(quantity)} disabled={quantity === 0}>
                    ADD TO CART
                </button>
            </div>
        </div>
    )
}

export default ItemCount;
