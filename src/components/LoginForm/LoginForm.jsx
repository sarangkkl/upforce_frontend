'use client'
import React,{useRef,useContext} from 'react'
import GlobalContext from '@/context/GlobalContext'
import { users } from '@/data/userdata'

const LoginForm = () => {
    const a = useContext(GlobalContext)
    
    const emailRef = useRef(null);
    const passwordRef = useRef(null);


    const loginHandle = () => {
      const email = emailRef.current.value
      const password = passwordRef.current.value
      console.log(email,password)
      a.login(email,password);
    }

  
    
  return (
    <>
        <div className="flex justify-center items-center ">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" >
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
            className="btn"
            type="submit"

            onClick={()=>{loginHandle()}}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
    <div className='container mx-auto'>
    <h1 className="text-2xl font-bold text-center">Test User Login Data</h1>
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Password</th>
      </tr>
    </thead>
    <tbody>
      {users.map((item,index)=>(
      <tr className="bg-base-200">
        <th>{index+1}</th>
        <td>{item.email}</td>
        <td>{item.password}</td>
      </tr>

      ))}
     
    </tbody>
  </table>
</div>

    </div>
    </>
  )
}

export default LoginForm

