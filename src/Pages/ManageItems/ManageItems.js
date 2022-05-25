import { Button } from 'bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Hooks from '../../Hooks/Hooks';

const ManageItems = () => {

    const navigate = useNavigate();

    const handleUseNavigate = (id) => {
        navigate(`/product/${id}`);
      };

    const [products, setProducts] = Hooks();

      const handleDelete = id =>{
          const proceed = window.confirm('Are you sure, want to Delete?');
          if(proceed){
              const url =`http://localhost:5000/product/${id}`;
              fetch(url, {
                  method: 'DELETE'
              })
              .then(res => res.json())
              .then(data => {
                  console.log(data);
                  const remaining = products.filter(product => product._id !== id)
                  setProducts(remaining);
              })
          }
      }

    return (
        <div className='container m-3'>
            <h1 className='text-center m-5'>Manage Your Product</h1>
            {
                products.map(product => <div

                     key={product._id}>
                        

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
      <button
            onClick={() => handleUseNavigate(product._id)}
            className="btn card-button m-2 rounded-pill"
          >
            Update
          </button>
          <button onClick={() =>  handleDelete(product._id)} className='btn btn-danger rounded-pill'>Delete</button>
    </div>
  </div>
</div>
                     </div>

                </div>
                    )
            }
        </div>
    );
};

export default ManageItems;