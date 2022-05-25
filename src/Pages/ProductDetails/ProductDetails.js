import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetails = () => {

    const navigate = useNavigate();

    const handleUseNavigate = (id) => {
        navigate(`/product/${id}`);
      };
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
        <div className='container m-3'>
            <h1 className='text-center m-5'>Your Product Details</h1>
            <div className=''>
                     <div className="mx-auto card mb-3 w-75" >
  <div className="row g-0">
    <div className="col-md-4">
      <img src={product.picture} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>    
        <p className="card-text"><small class="text-muted">Price: ${product.price}</small></p>
        <p className="card-text"><small class="text-muted">Quantity: {product.quantity}pcs</small></p>
        <p className="card-text"><small class="text-muted">About: {product.about}</small></p>
      </div>
      <>
      <p className='font-bold d-flex'>
          Update your Quantity
          <input className='w-25 m-2' type='number' />
          </p> 
      <button
            onClick={() => handleUseNavigate(product._id)}
            className="btn  card-button m-2 rounded-pill"
          >
            Update
          </button>
      </>

          
    </div>
  </div>
</div>
                     </div>
        </div>
    );
};

export default ProductDetails;