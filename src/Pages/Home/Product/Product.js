import React from 'react';
import { useNavigate } from 'react-router-dom';
import './product.css'

const Product = ({product}) => {
    const navigate = useNavigate();
    const { _id, quantity, price, picture, name, about    } = product || {};

    const handleUseNavigate = (id) => {
        navigate(`/product/${id}`);
      };

    return (
        <div className="col-lg-4 col-md-6 col-12">
      <div className="single-product py-4 h-100">
        <img className="w-100 mx-auto rounded-4 p-4" src={picture} alt="" />
        <div className="text-start p-4">
          <p>Product Name: <span>{name}</span></p>
          <p>Price: {price}$</p>
          <p>Quantity: {quantity}</p>
          <p>
            Description:
            <small>
              {about?.length > 50 ? about.slice(0, 50) + "..." : about}
            </small>
          </p>
          <button
            onClick={() => handleUseNavigate(_id)}
            className="btn card-button rounded-pill"
          >
            Update
          </button>
        </div>
      </div>
    </div>
    );
};

export default Product;