"use client";
import axios from 'axios';
import React from 'react';
import { useRouter } from 'next/navigation';

const DeleteProductsButton = ({id}) => {
    const router = useRouter();
    const deleteHandler =async ()=>{
        const res = await axios.delete(`http://localhost:3000/api/products/${id}`);
        const data = res.data;
        if (data.result.deletedCount != 0 && data.success) {
            alert('Product Deleted Successfully!');
            window.location.reload();
        } else {
            alert("Product Not deleted , Something went wrong. Please try again!");
        }

    }
  return (
    <button onClick={deleteHandler}>
      Delete
    </button>
  )
}

export default DeleteProductsButton;
