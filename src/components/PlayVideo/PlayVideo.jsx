import React, { useEffect,useState } from 'react';
import './PlayVideo.css';
import { images } from '../../utils/constants';
import { API_KEY } from '../../services/api/data';
import { convertValue } from '../../utils/helper/convertValue';
import moment from 'moment/moment';
import { useParams } from 'react-router-dom';
const PlayVideo = () => {
  const {videoId} =useParams();
  const [apiData,setApiData]=useState(null);
  const [channelData,setChannelData]=useState(null);
  const [commentData,setCommentData]=useState([]);

  const fetchVideoData =async()=>{
    const video_data_url =`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(video_data_url).then(response=>response.json()).then(data=>setApiData(data.items[0]));//0 just first object

  }
  const fetchChannelData= async()=>{  
    const channel_url=`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
    await fetch(channel_url).then(response=>response.json()).then(data=>setChannelData(data.items[0]));
     
    const comment_url=`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`;
    await fetch(comment_url).then(response=>response.json()).then(data=>setCommentData(data.items));

    
  }
  useEffect(()=>{
    fetchVideoData()
  },[videoId]);
  useEffect(()=>{
    fetchChannelData();
  },[apiData]) // apiData is updated this useeffect updated
  return (
    <div className='play-video'>
      <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h3>{apiData?apiData.snippet.title:'Title Here'}</h3>
      <div className='play-video-info'>
        <p>{apiData?convertValue(apiData.statistics.viewCount): '15K'} views &bull; { apiData?moment(apiData.snippet.publishedAt).fromNow():""}</p>
        <div>
          <span><img src={images.like} alt='like'/>{apiData? convertValue(apiData.statistics.likeCount):125}</span>
          <span><img src={images.dislike} alt='dislike'/></span>
          <span><img src={images.share} alt='share'/>Share</span>
          <span><img src={images.save} alt='save'/>Save</span>
        </div>
      </div>
      <hr/>
      <div className='publisher'>
        <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt='jack-publiser'/>
        <div>
          <p>{apiData?apiData.snippet.channelTitle:''}</p>
          <span>{channelData?convertValue(channelData.statistics.subscriberCount):"1M"} Subscribers</span>
        </div>
        <button>Subscribe</button>

      </div>
      <div className='video-description'>
        <p>{apiData?apiData.snippet.description.slice(0,250):"Description Here"}</p>
        <hr/>
        <h4>{apiData?convertValue(apiData.statistics.commentCount):102} comments</h4>
        {commentData.map((comment,index)=>{
           return(
            <div  key={index} className='comment'>
              <img src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} alt='user'/>
              <div>
                <h3>{comment.snippet.topLevelComment.snippet.authorDisplayName}<span> {moment(comment.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span></h3>
                <p>{comment.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className='comment-action'>
                  <img src={images.like} alt='like-comment'/>
                  <span>{convertValue(comment.snippet.topLevelComment.snippet.likeCount)}</span>
                  <img src={images.dislike} alt='dislike-comment'/>
                </div>
              </div>

            </div>
           )
        })}
       
      
      </div>
      
    </div>
  );
}

export default PlayVideo;