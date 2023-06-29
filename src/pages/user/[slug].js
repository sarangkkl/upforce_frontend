"use-client";
import React,{useState,useEffect} from 'react';
import { useRouter } from 'next/router';
import { GetUser } from '@/apicalls/user.js';
import { getAllBlogs } from '@/apicalls/blogs.js'


const ProfilePage = () => {
    const router = useRouter();
    const {slug} = router.query;
    

    const [user,setUser] = useState(null);
    const [posts,setPosts] = useState(null);
    const [loading,setLoading] = useState(true);

    async function fetchUser(userid){
        console.log(userid)
        let data = await GetUser(userid);
        console.log(data.data)
        setUser(data.data.data);
        // setLoading(false);
    }

    async function fetchPosts(username){
        let data = await getAllBlogs(null,null,null,null,username);
        console.log(data.data)
        setPosts(data.data);
        setLoading(false);

    }
        


    useEffect(()=>{
      if(slug){

    var userid = slug.split('+')[0];
    var username = slug.split('+')[1];
    
          fetchUser(userid);
          fetchPosts(username);
      }
    }
    ,[slug])

  return (
    <>
      {loading ? <div className='flex justify-center'>
        <div className="loading loading-lg "></div>
      </div> : <>
      
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
      </>}
    </>
  );
};

export default ProfilePage;
