"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import BackButton from "@/components/BackButton";
import { useRouter } from "next/navigation";
import { json } from "react-router-dom";

const addProductPage = ({ params }) => {
  const router = useRouter();

  const [product, setProduct] = useState({
    name: "",
    price: "",
    company: "",
    color: "",
    category: "",
  });

  const FindProduct = async () => {
    const response = await axios.get(
      `http://localhost:3000/api/products/${params.updateId}`,
      JSON.stringify(product)
    );
    const data = response.data;

    if (data.success) {
      setProduct({
        name: data.result.name,
        price: data.result.price,
        company: data.result.company,
        color: data.result.color,
        category: data.result.category,
      });
    }
  };
  useEffect(() => {
    FindProduct();
  }, []);

  const updateHandler = async (e) => {
    e.preventDefault();
    const response = await axios.put(
      `http://localhost:3000/api/products/${params.updateId}`,
      JSON.stringify(product)
    );
    const data = await response.data;
    if (data.success) {
      alert("Details Updated!");
      router.push("/products");
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <div className=" h-screen flex items-center justify-center flex-col gap-4 ">
      <div className="border border-white rounded-md">
        <h1 className=" text-4xl text-center my-10">Update Product</h1>
        <form
          onSubmit={updateHandler}
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
            Update
          </button>

          <BackButton />
        </form>
      </div>
    </div>
  );
};

export default addProductPage;
