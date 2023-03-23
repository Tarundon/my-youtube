import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { YOUTUBE_VIDEO_API } from '../Utils/constants';
import VideoCard from './VideoCard';

const VideoContainer = () => {
const [videos, setVideos] = useState([])
  useEffect(() => {
 
  getVideos();
   
  }, [])

  const getVideos = async ()=>{
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    // console.log(json.items);
    setVideos(json.items)
  }
  
  return (
    <div className='flex flex-wrap mx-4'>
      {videos.map((video)=>
      <Link to={"/watch?v="+ video.id}>
        <VideoCard key={video.id} info={video}/> 
      </Link>
      )}
    </div>
  )
}

export default VideoContainer