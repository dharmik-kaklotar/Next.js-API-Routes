import BackButton from "@/components/BackButton";

import React from "react";
import Link from "next/link";
import DeleteProductsButton from "@/components/DeleteProductsButton";

const getData = async () => {
  // let response = await axios.get("http://localhost:3000/api/products",);
  // let data = await response.data;

  let res = await fetch("http://localhost:3000/api/products",{cache:'no-cache'});

  let data = await res.json();
  if(data.success){

    return data.result;
  }else{
    return {success:false}
}
  
};

const appProductsPage = async () => {
  const products = await getData();

  // console.log(products);

  return (
    <div className="text-white m-4">
      <h1 className="text-4xl mb-4">Product List</h1>
      <table className="border-4  border-white">
        <thead>
          <tr>
            <td className=" border border-white px-4 py-2">Name</td>
            <td className="border border-white px-4 py-2">Price</td>
            <td className="border border-white px-4 py-2">Company</td>
            <td className="border border-white px-4 py-2">Color</td>
            <td className="border border-white px-4 py-2">Category</td>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.length > 0 &&
            products.map((product, index) => (
              <tr key={index}>
                <td className="border border-white px-4 py-2">
                  {product.name}
                </td>
                <td className=" border border-white px-4 py-2">
                  {product.price}
                </td>
                <td className=" border border-white px-4 py-2">
                  {product.company}
                </td>
                <td className=" border border-white px-4 py-2">
                  {product.color}
                </td>
                <td className="border border-white px-4 py-2">
                  {product.category}
                </td>
                <td className="border border-white px-4 py-2">
                  <Link href={`/products/${product._id}`}>Update</Link>
                </td>
                <td className="border border-white px-4 py-2">
                  <DeleteProductsButton id={product._id} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <BackButton />
    </div>
  );
};

export default appProductsPage;
