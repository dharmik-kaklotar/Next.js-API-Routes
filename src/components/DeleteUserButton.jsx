"use client";
import axios from "axios";
const DeleteUserButton = (props) => {

    const deleteUserHandler = async ()=>{
        const res = await axios.delete(`http://localhost:3000/api/users/${props.id}`);
        let data = res.data;
        if (data.success) {
          alert("user Deleted");
        }
    }
    
  return (
    <button onClick={deleteUserHandler} className=' bg-slate-800 my-2 p-2 rounded-md'>
      Delete User
    </button>
  )
}

export default DeleteUserButton
