import React from 'react'
import './VideoPlayer.css'
import video from '../../assets/college-video.mp4'
const VideoPlayer = () => {
    
  return (
    <div className='vido-player hide'>
       <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer
