import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {

    const [products, setProducts] = useState([]);
    
    useEffect(() =>{
        fetch('product.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);


    return (

        <div className='container'>
            <h2 className='text-center mt-5'>Our Products</h2>

            <div className='row g-4 mt-2'>
            {
                products.map(products => (
                    <Product  
                    key={products.id} product ={products}
                    ></Product>
                ))
            }
            </div>
            <div className="text-center">
        <Link to="/manageInventory">
          <button className="btn manage-btn mt-5 text-center">
            Manage Inventories
          </button>
        </Link>
      </div>
        </div>
    );
};

export default Products;