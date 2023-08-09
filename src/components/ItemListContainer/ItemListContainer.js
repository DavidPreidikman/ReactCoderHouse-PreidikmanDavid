import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductsByCategory, getProducts } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";

import './ItemListContainer.css';



const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])

    return (
        <div>
            <h1 className="Greeting">{greeting}</h1>
            <div className="ecommerceCardContainer">
                <ItemList products={products}/>
            </div>
        </div>
    )
}

export default ItemListContainer