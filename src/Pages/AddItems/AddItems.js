import React from 'react';
import { useForm } from "react-hook-form";


const AddItems = () => {

    const { register, handleSubmit } = useForm();
  const onSubmit = data => {
      console.log(data);
      const url =`http://localhost:5000/product`;
      fetch(url, {
          method: 'POST',
          headers: {
              'content-type' : 'application/json'
          },
          body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(result => {
          console.log(result);
      })
    };

    return (
        <div className='w-50 mx-auto'>
            <h1 className='text-center mt-3'>Add Your Items</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2 rounded' placeholder='product name' {...register("firstName", { required: true, maxLength: 20 })} />
                <input className='mb-2 rounded' placeholder='price' type="number" {...register('price')} />
                <input className='mb-2 rounded' placeholder='photo url' type="text" {...register('picture')} />
                <textarea className='mb-2 rounded' placeholder='product description' {...register('description')} />
                <input className='btn manage-btn w-25 align-item mx-auto mt-2 text-center' type="submit" value='Add' />
            </form>
        </div>
    );
};

export default AddItems;