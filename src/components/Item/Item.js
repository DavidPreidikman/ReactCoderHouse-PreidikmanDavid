import { NavLink, Link} from 'react-router-dom';
import './Item.css';

const Item = ({id, name, img, price, stock}) => {
    return(
        <div className="CardContainer">
            <article className="CardItem">
                <img src={img}/>
                <div className="CardInfo">
                    <h3 className="CardName">{name}</h3>
                    <h4 className="CardPrice">${price}</h4>
                    <button className='CardFooter'>
                        <Link to={`/item/${id}`} style={{ color: "black" }}>SEE DETAILS</Link>
                    </button>
                </div>
            </article>
        </div>
    )
}

export default Item