import React from 'react';

const VideoDetail = ({ video }) => {
  // Recibe props.video, se hace una destructuración

  if (!video) {
    //Cuando no se le ha dado click a ningún video, es decir está null el state
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className='ui embed'>
        <iframe src={videoSrc} title={video.snippet.title} />
      </div>
      <div className='ui segment'>
        <h4 className='ui header'>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
