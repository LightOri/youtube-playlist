import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import PlaylistItem from '../playlist-items/playlist-items';

import PlaylistItemsService from '../../services/playlist-items-service';

import 'react-alice-carousel/lib/alice-carousel.css';
import './video-carousel.css';
 
class VideoCarousel extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      playListIems: [],
    };

    this.setActiveVideoMetadata = this.setActiveVideoMetadata.bind(this);
  }

  playlistItemsService = new PlaylistItemsService();

  setActiveVideoMetadata (title, thumbnails, videoId) {
    this.props.setActiveVideoMetadata(title, thumbnails, videoId);
  }

  componentDidMount() {
    this.playlistItemsService.getPlaylistItems().then( data => {
      this.setState({
        playListIems: data,
      })
    })
  }

  render() {
    const renderPlaylistItems = () => (
        this.state.playListIems.map((item, i) => (
          <PlaylistItem
            key={i}
            title={item.snippet.title}
            thumbnails={item.snippet.thumbnails}
            videoId={item.snippet.resourceId.videoId} 
            setVideoSelected={this.setActiveVideoMetadata}
          />
          )
        )
      )

    return (
      <AliceCarousel mouseDragEnabled responsive={{0: {items: 3}}} >
        {renderPlaylistItems()}
      </AliceCarousel>
    )
  }
  
}

export default VideoCarousel;