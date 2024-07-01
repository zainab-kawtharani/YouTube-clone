import React,{useEffect, useState} from 'react';
import './Recommended.css';
import { images } from '../../utils/constants';
import { API_KEY } from '../../services/api/data';
import { convertValue } from '../../utils/helper/convertValue';
import { Link } from 'react-router-dom';

const Recommended = ({categoryId}) => {
    const [apiData,setApiData]=useState([]);
    const fetchRecommendedVideo= async()=>{
        const video_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
        await fetch(video_url).then(response=>response.json()).then(data=>setApiData(data.items))
    }
    useEffect(()=>{
        fetchRecommendedVideo();
    },[])

  return (
    <div className='recommended'>
        {apiData.map((video,index)=>{
            return(
              <Link to={`/video/${video.snippet.categoryId}/${video.id}`} key={index} className='side-video-list'>
                    <img src={video.snippet.thumbnails.medium.url} alt=''/>
                    <div className='video-info'>
                        <h4>{video.snippet.title}</h4>
                        <p>{video.snippet.channelTitle}</p>
                        <p>{convertValue(video.statistics.viewCount)} views</p>
                    </div>
             </Link>

            )
        })}
        
       
    </div>
  )
}

export default Recommended