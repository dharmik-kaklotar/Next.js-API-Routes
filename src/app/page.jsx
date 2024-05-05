import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className=" m-6 text-3xl flex flex-col ">
      <Link href="/products" className=" my-2">All Products</Link>
      <Link href="/addproduct" className=" my-2">Add Products</Link>
   
    </div>
    </>
  );
}
