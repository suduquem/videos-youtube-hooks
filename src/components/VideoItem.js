import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    // onClick se hace con arrow function para asegurarme
    // que le estoy pasando el video al que se le dio click
    <div onClick={() => onVideoSelect(video)} className='video-item item'>
      <img
        className='ui image'
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className='content'>
        <div className='header'>{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
