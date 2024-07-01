import React from 'react';
import './Video.css'
import { PlayVideo, Recommended } from '../../components';
import { useParams } from 'react-router-dom';

const Video = () => {
  const{videoId,categoryId}=useParams();
  return (
    <div className='play-container'>
      <PlayVideo videoId={videoId}/>
      <Recommended categoryId={categoryId}/>
      
    </div>
  )
}

export default Video
