import DeleteUserButton from "@/components/DeleteUserButton";
import axios from "axios";
import Link from "next/link";

 const getUserData = async () => {
   const res = await axios.get("http://localhost:3000/api/users");
   let data = res.data.result;
   return data;
 };

const page = async () => {
 const users = await getUserData();
  return (
    <>
      <div className=" m-4 ">
        {users.map((item) => {
          return (
            <div key={item._id} className="  gap-4 flex items-center ">
              <p>
                {item.id} . {item.name}
              </p>
              <Link
                href={`users/${item.id}`}
                className="bg-slate-800 my-2 p-2 rounded-md"
              >
                See User
              </Link>
              <Link
                href={`users/${item.id}/update`}
                className="bg-slate-800 my-2 p-2 rounded-md"
              >
                Update User
              </Link>
              <DeleteUserButton id={item.id} />
            </div>
          );
        })}
      </div>
      <Link href={"/createuser"} className="bg-slate-800 my-4 mx-2 p-2 rounded-md">
        Create new User
      </Link>
    </>
  );
};

export default page;
