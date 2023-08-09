import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)

        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div>
            <div className="columns is-vcentered">
                <div className="column is-5 has-text-right">
                    <button className="button is-danger is-small" style={{ backgroundColor: "white", color: "black", border: "1px solid black", borderRadius: "10px", marginRight: "20px" }} onClick={decrement}>
                        <p>-</p>
                    </button>
                </div>
                <div className="column is-2 has-text-centered">
                    <div>
                        <p className="counter">{quantity}</p>
                    </div>
                </div>
                <div className="column is-5 has-text-left">
                    <button className="button is-danger is-small" style={{ backgroundColor: "white", color: "black", border: "1px solid black", borderRadius: "10px", marginLeft: "20px" }} onClick={increment}>
                        <p>+</p>
                    </button>
                </div>
            </div>
            <div className="column is-12 has-text-centered" style={{ marginTop: "10px" }}>
                <button className="AddToCart">
                    ADD TO CART
                </button>
            </div>
        </div>
    );
    
    
}

export default ItemCount
