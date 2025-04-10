
import axios from "axios";

export const userRegisteration= async (userData)=>{
    console.log("crud user data",userData);
    return await axios.post("/api/users/register",userData);
}

export const userLoginVerification=async(userData)=>{
    console.log("crud user data",userData);
    return await axios.post("/api/users/login",userData);
}