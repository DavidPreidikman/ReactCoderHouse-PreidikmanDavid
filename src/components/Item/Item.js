import { Link} from 'react-router-dom';
import './Item.css';

const Item = ({ id, name, img, price }) => {
    return(
        <div className="CardContainer">
            <article className="CardItem">
                <img src={img}/>
                <div className="CardInfo">
                    <h3 className="CardName">{name}</h3>
                    <h4 className="CardPrice">${price}</h4>
                    <Link to={`/item/${id}`}>
                        <button className="SeeDetails">SEE DETAILS</button>
                    </Link>
                    
                </div>
            </article>
        </div>
    )
}

export default Item;