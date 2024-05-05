"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

const BackButton = () => {
    const router = useRouter();
    const backButtonHandler = (e) => {
      e.preventDefault();
      router.push("/");
    };
  return (
    <button
      className=" bg-white text-black font-bold p-2 w-72 mt-3 rounded-md "
      onClick={backButtonHandler}
    >
      back
    </button>
  );
}

export default BackButton
