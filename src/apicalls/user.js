import { BASE_URL } from "../globalVariable";
import axios from "axios";



const GetUser = async(id) =>{
    let data = await axios.get(`${BASE_URL}user/${id}`);
    return data;
}

const GetAllUser = async() =>{
    let data = await axios.get(`${BASE_URL}user`);
    return data;
}


const GetProfile = async(token) => {
    
    let data = await axios.get(`${BASE_URL}accounts/profile`, {
        headers: {
            Authorization: `Bearer ${token}`

        }
    });
    return data;
}


export {
    GetUser,GetAllUser,GetProfile
}