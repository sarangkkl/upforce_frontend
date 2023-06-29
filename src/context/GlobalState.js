import {useState,useEffect} from "react";
import GlobalContext from "./GlobalContext";
import { BASE_URL } from "../globalVariable";
import axios from "axios";

import { useRouter } from 'next/router'


const GlobalState = (props) => {

    const router = useRouter()

    const [token, setToken] = useState(null)
    const [id,setId] = useState(null)

    async function getTokenAndSetFromLocalStorage(){
        const token = localStorage.getItem("token")
        const id = localStorage.getItem("id")
        if(token){
            setToken(token)
            setId(id)
        }
    }

    // useEffect(() => {
    // }, [])





    async function login(username, password) {
        const response = await axios.post(`${BASE_URL}accounts/login`, {
            username: username,
            password: password
        })

        if(!response.data.error){
            localStorage.setItem("token", response.data.data.token)
            localStorage.setItem("id", response.data.data.id)
            setToken(response.data.data.token)
            setId(response.data.data.id)
            router.push("/profile")
            // alert("Login Success ")
        }else{
            alert(response.data.message)
        }
       


    }

    async function logout() {
        localStorage.removeItem("token")
        localStorage.removeItem("id")
        setToken(null)
        setId(null)
    }


    async function register(name, email,password) {
        const response = await axios.post(`${BASE_URL}user`, {
            name: name,
            password: password,
            email: email
        })
        console.log(response.data)
        // localStorage.setItem("access_token", response.data.access)
        // localStorage.setItem("refresh_token", response.data.refresh)
        // setToken(response.data.access)
    }



    return (
        <GlobalContext.Provider value={{
            token: token,
            setToken: setToken,
            login: login,
            register: register,
            getTokenAndSetFromLocalStorage: getTokenAndSetFromLocalStorage,
            logout: logout,
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}


export default GlobalState;