import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

import { getDoc, doc } from "firebase/firestore"; // Corregir ruta de importación
import { db } from "../../services-firebase/firebaseConfig";

const ItemDetailContainer = () => {
    const [product, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);

    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true);

        const docRef = doc(db, "products", itemId);

        getDoc(docRef)
            .then(response => {
                const data = response.data();
                const productsAdapted = { id: response.id, ...data };
                setProducts(productsAdapted);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [itemId]);

    return (
        <div className="ItemDetailContainer">
            <ItemDetail { ...product } />
        </div>
    )
}

export default ItemDetailContainer;

