import React,{useContext,useEffect} from 'react'
import Link from 'next/link';
import { Chip } from '@/components';
import { LikePost } from '@/apicalls/blogs';
import GlobalContext from '@/context/GlobalContext';

const Card = ({item}) => {

  const a = useContext(GlobalContext);


  async function likePostHandle(){
    if(!a.token){
      alert('Please Login to Like the Post');
      return;
    }
    const data = await LikePost(a.token,item.id);
    if(!data.error){
      alert('Post Liked Refresh the Page to see the changes');
    }else{
      alert(data.message);
    }
    
  }







  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    const formattedDate = dateObj.toLocaleString();
    return formattedDate;
  };
  return (
    <>
        <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{item.title}</h2>
    <p>Posted by : <Link href={`/user/${item.user.id}+${item.user.username}`} className='text-red-500'>{item.user.username}</Link></p>
    <p>Posted On : {formatDate(item.created_at)}</p>
    <p>Total Likes: {item.likes}</p>
    <Link href={`/posts/${item.id}`} className='text-red-500'>Read More</Link>
    <div className='flex gap-2 flex-wrap'>
    {item.topics.map((item,index)=>(
      <Chip key={index} text={item.name} />
    ))}
    </div>
    <div className='flex justify-between'>
      <button className="btn " onClick={()=>{likePostHandle()}}>Like</button>
    </div>

    
  </div>
</div>
    </>
  )
}

export default Card