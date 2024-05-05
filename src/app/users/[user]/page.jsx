"use client";
import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';

const userPage = ({ params }) => {
    const [user, SetUser] = useState([]);

    const getUserData = async (id) => {
      const res = await axios.get(`http://localhost:3000/api/users/${id}`);
      console.log(res.data.result);
      SetUser(res.data.result);
    };
    useEffect(() => {
      getUserData(params.user);
    }, []);
  return (
    <div className=" p-4">
      <h1 className=" text-4xl">User Detail</h1>
      {
        <p>
          Id: {user.id}
          <br />
          Name : {user.name}
          <br />
          Age: {user.age}
          <br />
          Email : {user.email}
        </p>
      }
    </div>
  );
}

export default userPage
