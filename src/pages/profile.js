'use client';
import React,{useEffect,useState,useContext} from 'react';
import { GetProfile } from '@/apicalls/user';
import GlobalContext from '@/context/GlobalContext';




const profile = () => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const [posts,setPosts] = useState(null)

    const a = useContext(GlobalContext);
    // console.log()


    async function fetchUser(){
      console.log(a.token)
        let data = await GetProfile(a.token);
        setUser(data.data.data);
        setPosts(data.data.data.posts);
        setLoading(false);
    }
    useEffect(()=>{
        if(a.token){
            fetchUser()
        }
    },[a.token])




  return (
    <>
        {loading ? <>
        <p className='text-center'>loading.....</p>
        </> : <>
        {console.log(posts)}
        <div className='container mx-auto'>

<div className="container mx-auto p-8">
<div className="flex items-center mb-8">
  {user.profile_image ? (
    <img
      src={user.profile_image}
      alt="Profile"
      className="w-16 h-16 rounded-full mr-4"
    />
  ) : (
    <div className="w-16 h-16 rounded-full bg-gray-300 mr-4"></div>
  )}

  <div>
    <h2 className="text-2xl font-bold">{user.name}</h2>
    <p className="text-gray-500">@{user.username}</p>
  </div>
</div>

<div className="mb-8">
  <h3 className="text-lg font-bold mb-2">Bio</h3>
  <p>{user.bio}</p>
</div>

<div className="mb-8">
  <h3 className="text-lg font-bold mb-2">Contact Information</h3>
  <p>Email: {user.email}</p>
  <p>Phone: {user.phone_number}</p>
  <p>Website: {user.website}</p>
</div>

<div className="mb-8">
  <h3 className="text-lg font-bold mb-2">Social Media</h3>
  <p>Facebook: {user.facebook}</p>
  <p>Twitter: {user.twitter}</p>
  <p>Instagram: {user.instagram}</p>
  <p>YouTube: {user.youtube}</p>
</div>

<div className="mb-8">
  <h3 className="text-lg font-bold mb-2">Posts</h3>
  {posts.length > 0 ? (
    <ul>
      {posts.map((post) => (
        <li key={post.id} className="mb-4">
          <button className='btn btn-primary'>
            EDIT
          </button>
          <button className='btn btn-error text-white mx-2'>
            DELETE
          </button>
          <h4 className="text-xl font-bold">{post.title}</h4>
          <p>{post.content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p>No posts found.</p>
  )}
</div>
</div>
</div>
        
        </>}
    
    </>
  )
}

export default profile