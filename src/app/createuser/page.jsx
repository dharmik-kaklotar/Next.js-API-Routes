"use client";
import React, { useState } from "react";
import axios from "axios";

const createUserPage = () => {
    const [data,setData] = useState({
        name:"",
        age:"",
        email:""
    });

    async function postData (){
        let res =  await axios.post('http://localhost:3000/api/users',JSON.stringify(data));
        console.log(res.data);
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        postData();
        setData({ name: "", age: "", email: "" });
    }
  return (
    <>
      <div className=" h-screen flex items-center justify-center flex-col gap-4 ">
        <div className="border border-white rounded-md">
          <h1 className=" text-4xl text-center my-10">Create the user</h1>
          <form
            onSubmit={submitHandler}
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
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default createUserPage;
