import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ItemList from "../ItemList/ItemList";

import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services-firebase/firebaseConfig";

import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true);
        
        let collectionRef = categoryId
            ? query(collection(db, "products"), where("category", "==", categoryId))
            : collection(db, "products")

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProducts(productsAdapted)
            })

            .catch(error => {
                console.log(error)
            })

            .finally(() => {
                setLoading(false);

            });
    }, [categoryId]);

        return (
            <div>
                <h1 className="Greeting">{greeting}</h1>
                <div className="ecommerceCardContainer">
                    <ItemList products={products} />
                </div>
            </div>
    )
}

export default ItemListContainer;

