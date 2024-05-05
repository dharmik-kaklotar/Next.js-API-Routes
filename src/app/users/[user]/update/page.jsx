"use client";
import React, { useState,useEffect } from "react";
import axios from "axios";

const UpdatePage = ({ params }) => {
const id= params.user;

  const [data, setData] = useState({
    name: "",
    age: "",
    email: "",
});
const getUserData = async (id) => {
  const res = await axios.get(`http://localhost:3000/api/users/${id}`);
setData(res.data.result);
};
useEffect(() => {
  getUserData(params.user);
}, []);

const UpdateData = async (e) => {
    e.preventDefault()
  const res = await axios.put(`http://localhost:3000/api/users/${id}`,JSON.stringify(data));
  console.log(res.data);
  if(res.data.success){
    alert("Details Updated");
  }else{
    alert("somthing went wrong");
  }
};
 


  return (
    <>
      <div className=" h-screen flex items-center justify-center flex-col gap-4 ">
        <div className="border border-white rounded-md">
          <h1 className=" text-4xl text-center my-10">
            Update the user {params.user}
          </h1>
          <form
            onSubmit={UpdateData}
            className=" flex flex-col gap-1 text-black m-24 mt-0"
          >
            <input
              value={data.name}
              required
              className=" rounded-md p-2 focus:outline-none"
              type="text"
              name="Name"
              placeholder="Username"
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
              }}
            />
            <br />
            <input
              value={data.age}
              required
              className=" rounded-md p-2 focus:outline-none"
              type="number"
              name="age"
              placeholder="Age"
              onChange={(e) => {
                setData({ ...data, age: e.target.value });
              }}
            />
            <br />

            <input
              value={data.email}
              required
              className=" rounded-md p-2 focus:outline-none"
              type="email"
              name="email"
              placeholder="email"
              onChange={(e) => {
                setData({ ...data, email: e.target.value });
              }}
            />
            <br />
            <button
              type="submit"
              className=" bg-white  p-2 w-72 rounded-md font-semibold"
            >
              Update User
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdatePage;
