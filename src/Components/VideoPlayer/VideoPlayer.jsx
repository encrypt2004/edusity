import React from 'react';
import './VideoPlayer.css';
import video from '../../assets/college-video.mp4';

const VideoPlayer = () => {
  return (
    <div className="video-player hide">  {/* Fixed the className typo */}
      <video src={video} autoPlay muted controls />
    </div>
  );
}

export default VideoPlayer;
