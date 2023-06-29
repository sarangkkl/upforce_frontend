'use client';
import React,{useState,useEffect} from 'react';
import { GetAllUser } from '@/apicalls/user';

const authors = () => {

  const [authors,setAuthors] = useState([])

  async function fetchAuthors(){
    let data = await GetAllUser();
    setAuthors(data.data.data)
    console.log(data.data.data)
  }

  useEffect(()=>{
    fetchAuthors()
  },[])

  return (
    <>
      {authors ? <>
        <div className='container mx-auto'>
      <div className="overflow-x-auto">
  <table className="table">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Subscribe Count</th>
        <th>Username</th>
        <th>Subscribe</th>

      </tr>
    </thead>
    <tbody>

     {authors.map((item,index)=>(
        <tr key={index}>
        <th>{index+1}</th>
        <td>{item.name}</td>
        <td>{item.subscribers}</td>
        <td>{item.username}</td>
        <td><button className='btn btn-error text-white'>Subscribe</button></td>
      </tr>
     ))}
    </tbody>
  </table>
</div>
    </div>
      </> : <>
      
      </>}
    </>
  )
}

export default authors