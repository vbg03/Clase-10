import React from 'react';

const YoutubePlayer = ({ videoId }) => {
  return (
    <div className="youtube-player">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/qwIjjcXg868?autoplay=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YoutubePlayer;
