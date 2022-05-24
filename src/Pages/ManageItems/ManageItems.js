import React from 'react';
import Hooks from '../../Hooks/Hooks';

const ManageItems = () => {
    const [products] = Hooks();

    return (
        <div>
            <h1 className='text-center m-5'>Manage Your Product</h1>
            {
                products.map(product => <div

                     key={product._id}>
                         <img className="w-25 rounded-4 p-4" src={product.picture} alt="" />
                       <h4 className='text-center'>{product.name}</h4>

                     

                </div>
                    )
            }
        </div>
    );
};

export default ManageItems;