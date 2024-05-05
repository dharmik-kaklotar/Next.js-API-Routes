"use client";
import React, { useState } from "react";
import axios from "axios";
import BackButton from "@/components/BackButton";
import { useRouter } from "next/navigation";



const addProductPage = () => {
  const router = useRouter();

  const [product, setProduct] = useState({
    name: "",
    price: "",
    company: "",
    color: "",
    category: "",
  });
  
  async function addProduct() {
    const response =await axios.post(
      "http://localhost:3000/api/products",
      JSON.stringify(product)
    );
     const data = response.data;

     alert(data.result);
    router.push("/products");
    
  }
  function submitHandler(e) {
    e.preventDefault();
    addProduct();
    setProduct({ name: "", price: "", company: "", color: "", category: "" });
  }
  
  
  
  return (
    <div className=" h-screen flex items-center justify-center flex-col gap-4 ">
      <div className="border border-white rounded-md">
        <h1 className=" text-4xl text-center my-10">Add New Product</h1>
        <form
            onSubmit={submitHandler}
          className=" flex flex-col gap-1 text-black m-24 mt-0"
        >
          <label htmlFor="name" className="text-white">
            Name :{" "}
          </label>
          <input
            id="name"
            value={product.name}
            required
            className=" rounded-md p-2 focus:outline-none"
            type="text"
            name="Name"
            placeholder="Enter Product name"
            onChange={(e) => {
              setProduct({ ...product, name: e.target.value });
            }}
          />
          <br />
          <label htmlFor="price" className="text-white">
            Price :{" "}
          </label>
          <input
            id="price"
            value={product.price}
            type="text"
            required
            className=" rounded-md p-2 focus:outline-none"
            placeholder="Enter Price"
            onChange={(e) => {
              setProduct({ ...product, price: e.target.value });
            }}
          />
          <br />
          <label htmlFor="com" className="text-white">
            Company :{" "}
          </label>
          <input
            id="com"
            value={product.company}
            required
            className=" rounded-md p-2 focus:outline-none"
            type="text"
            placeholder="Enter company"
            onChange={(e) => {
              setProduct({ ...product, company: e.target.value });
            }}
          />
          <br />
          <label htmlFor="color" className="text-white">
            Color :{" "}
          </label>
          <input
            id="color"
            value={product.color}
            required
            className=" rounded-md p-2 focus:outline-none"
            type="text"
            placeholder="Enter Color"
            onChange={(e) => {
              setProduct({ ...product, color: e.target.value });
            }}
          />
          <br />
          <label htmlFor="category" className="text-white">
            Category :{" "}
          </label>
          <input
            id="category"
            value={product.category}
            required
            className=" rounded-md p-2 focus:outline-none"
            type="text"
            placeholder="Enter Catagory"
            onChange={(e) => {
              setProduct({ ...product, category: e.target.value });
            }}
          />
          <br />
          <button
            type="submit"
            className=" bg-white  p-2 w-72 rounded-md font-semibold"
          >
            Add Product
          </button>

          <BackButton />
        </form>
      </div>
    </div>
  );
};

export default addProductPage;
