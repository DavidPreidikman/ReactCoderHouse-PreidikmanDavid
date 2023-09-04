import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css';
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ id, name, img2, category, price, stock, description }) => {
    const [quantityAdded, setQuantity] = useState(0)

    const { addItem } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantity(quantity)

        const item = { id, name, price }

        addItem(item, quantity)
    }

    return (
        <div className="CardContainerDetail">
            <article className="CardItemDetail">
            <h3 className="CardNameDetail">{name}</h3>
                <img src={img2}/>
                <div className="CardInfo">
                    <h3 className="CardCategoryDetail">{category}</h3>
                    <h4 className="CardPriceDetail">${price}</h4>
                    <p className="CardDescriptionDetail">{description}</p>
                    <footer className="ItemFooter">
                        {
                            quantityAdded > 0 ? (
                                <Link to="/cart">
                                    <button className="GoToBag"> GO TO BAG</button>
                                </Link>
                            ) : (
                            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                            )
                        }
                    </footer>
                </div>
            </article>
        </div>
    )
}

export default ItemDetail;
