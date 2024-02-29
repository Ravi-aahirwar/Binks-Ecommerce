import React, {useEffect} from 'react'
import { useProductContext} from '../../utils/contexts/ProductsContext'
import { useParams } from "react-router-dom";
import Navbar from '../../components/navbar/Navbar'
import AddToCart from '../../components/addToCart/AddToCart';
export default function ProductDetail() {
    const { id } = useParams()
    const { getApiProduct, singleProduct } = useProductContext()
    const API = "https://fakestoreapi.com/products";

    const {
        id: abcd,
        price,
        description,
        category,
        image,
        title,
    } = singleProduct;

    useEffect(() => {
        getApiProduct(`${API}/${id}`)
    }, [API]);
    return (
        <div>
            <Navbar />
            <div>
                <img src={image} alt={category} height={60} width={60} />
                <h2> Id : {id} </h2>
                <h2>title: {title}</h2>
                <h4> Price: {price} </h4>
                <h5>Descriptions: {description} </h5>
                <h5> Category: {category} </h5>
            </div>
            <AddToCart product={singleProduct} />
        </div>
    )
}
