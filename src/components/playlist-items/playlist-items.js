import React from 'react';

import './playlist-items.css';
 
const PlaylistItem = ({title, thumbnails, videoId, setVideoSelected}) => {
  const handleOnDragStart = e => e.preventDefault();

  const onVideoPreviewClick = () => {
    setVideoSelected(title, thumbnails, videoId);
  }

  return (
      <img 
        src={thumbnails.medium.url} 
        onDragStart={handleOnDragStart} 
        onClick={onVideoPreviewClick}
        className="playlist-item"
        alt="playlist item"
      />
  )
}

export default PlaylistItem;