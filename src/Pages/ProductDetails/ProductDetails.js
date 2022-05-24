import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const { _id, catagory, name, supplier, price, quantity, desc, img } = product;

    useEffect( () =>{
        const url = `http://localhost:5000/product/${productId}`;
        console.log(url);
        fetch(url)
        .then(res=> res.json())
        .then(data => setProduct(data));

    }, [])
    return (
        <div>
            <h1>this is product details : {product.name}</h1>
        </div>
    );
};

export default ProductDetails;