"use-client";
import React, { useEffect, useState } from 'react';
import { getAllBlogs } from '@/apicalls/blogs.js';
import { GetTopics } from '@/apicalls/topic.js';
import { Card } from '../components';


const index = () => {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState(null);
  const [topic, setTopic] = useState(null);
  const [topicFilter,setTopicFilter] = useState(null);
  const [postPerPage,setPostPerPage] = useState(null);
  const [page,setPage] = useState(1);
  const [page_count,setCountPage] = useState(1);
  const [loading,setLoading] = useState(true);


  async function getBlogs() {
    setLoading(true)
    let data = await getAllBlogs(search,topicFilter,postPerPage,page);
    if (!data.error) {
      if(postPerPage){
        console.log(data.total_page)
        setCountPage(data.total_page)
      }
      setBlogs(data.data);
    }
    setLoading(false)
  }

  async function getAllTopics(){
    let data = await GetTopics();
    if(!data.error){
      // console.log(data.data.data)
      setTopic(data.data.data);
    }
  }

  

  useEffect(() => {
    getBlogs()
  }, [search, topicFilter,postPerPage,page])

  useEffect(() => {
    getAllTopics()
  }, [])

  return (
    <div>
      <div className='container mx-auto'>
        </div>
      <div className='container mx-auto h-50px w-full my-7'>
        <input type="text" placeholder="Search For keyword" className="input input-bordered input-accent w-full max-w-xs" onChange={(e) => setSearch(e.target.value)} />

        <select className="select select-secondary w-full max-w-xs" onChange={(e)=>{setTopicFilter(e.target.value)}}>
          <option selected value="">Pick your Topic</option>
          {topic ? <>
            {topic.map((item,currentIndex)=>(
              <option key={currentIndex} value={item.name}>{item.name}</option>
            ))}
          </>:<></>}
        </select>
        <select className="select select-secondary w-full max-w-xs" onChange={(e)=>{setPostPerPage(e.target.value)}}>
          <option selected value="">Post Per Page</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>

        </select>

        {postPerPage ? <>
          <select className="select select-secondary w-full max-w-xs" onChange={(e)=>{setPage(e.target.value)}}>
            <option selected value="">Page</option>
            {Array.from({ length: page_count }, (_, index) => (
        <option key={index} value={index+1}>{index+1}</option>
      ))}
          </select>
        </>:<></>}
        {loading ? <h1 className='text-center text-xl'>Loading ........</h1> : <></>}


      </div>
      <div className='container mx-auto'>
        <div className="alert alert-warning">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
          <span>Search Works on content and the title</span>||<span>Topic Filter works on the topic of the blog</span>||
          <span>Click on the user profile to view that user bio</span>
        </div>
      </div>
      {blogs ? <>
        <div className='container mx-auto'>
        <p>Total Post: {blogs.length}</p>
        {postPerPage ? <>Page : {page}</>:<></>}
        </div>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {blogs.map((item, currIndex) => (
          <>
            <Card item={item} key={currIndex} />
          </>
        ))}
      </div>
      </> : <><h1 className='text-center'>Loading ........</h1></>}
    </div>
  )
}

export default index