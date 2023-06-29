'use client'
import React,{useRef,useContext} from 'react'
import GlobalContext from '@/context/GlobalContext'


const RegisterForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const a = useContext(GlobalContext)


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const name = nameRef.current.value;
  //   const email = emailRef.current.value;
  //   const password = passwordRef.current.value;

  //   // Do something with the name, email, and password data (e.g., send to server, validate, etc.)
  //   console.log('Name:', name);
  //   console.log('Email:', email);
  //   console.log('Password:', password);

  //   // Reset the form
  //   nameRef.current.value = '';
  //   emailRef.current.value = '';
  //   passwordRef.current.value = '';
  // };


  const handleRegister = ()=>{
    let email = emailRef.current.value
    let password = passwordRef.current.value
    let name = nameRef.current.value
    a.register(name,email,password)

  }

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your name"
            ref={nameRef}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            ref={emailRef}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
            ref={passwordRef}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={()=>{handleRegister()}}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
