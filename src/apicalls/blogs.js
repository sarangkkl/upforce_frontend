import axios from "axios";
import { BASE_URL } from '../globalVariable';

const getAllBlogs = async (search_query=null,topics=null,post_per_page=null,page=null,author=null) => {
    const params = {};

    if(search_query){
        params.search_query = search_query;
    }
    if(post_per_page){
        params.post_per_page = post_per_page;
    }
    if(page){
        params.page_number = page;
    }
    if(author){
        params.user = author;
    }
    
    if(topics){
        params.topics = topics;
    }

    let res = await axios.get(`${BASE_URL}blog`,{params});
    return res.data;
}


const LikePost = async (token,post_id) => {
    let res = await axios.post(`${BASE_URL}like`,{
        post:post_id
    },{headers:{'Authorization':`Bearer ${token}`}})
    return res.data;
}




export {
    getAllBlogs,LikePost
}