import { BASE_URL } from "../globalVariable";
import axios from "axios";


const GetTopics = () =>{
    let data = axios.get(`${BASE_URL}topics`);
    return data;
}


export {
    GetTopics
}