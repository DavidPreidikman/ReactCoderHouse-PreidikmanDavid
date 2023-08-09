import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css';

const ItemDetail = ({ id, name, img2, category, price, stock}) => {
    return (
        <div className="CardContainerDetail">
            <article className="CardItemDetail">
            <h3 className="CardNameDetail">{name}</h3>
                <img src={img2}/>
                <div className="CardInfo">
                    <h3 className="CardCategoryDetail">{category}</h3>
                    <h4 className="CardPriceDetail">${price}</h4>
                    <footer className="ItemFooter">
                        <ItemCount initial={0} stock={stock} onAdd={(quantity) => console.log("Added Quantity",quantity)}/>
                    </footer>
                </div>
            </article>
        </div>
    )
}

export default ItemDetail