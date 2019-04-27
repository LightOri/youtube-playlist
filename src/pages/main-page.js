import React from 'react';
import { Embed } from 'semantic-ui-react';
import VideoTitle from '../components/video-title/video-title';
import VideoCarousel from '../components/video-carousel/video-carousel';

import './main-page.css';

class MainPage extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      activeVideoTitle: 'Please select any video from thumbnails',
      placeholder: '',
      videoId: '',
    };

    this.setActiveVideoMetadata = this.setActiveVideoMetadata.bind(this);
  }

  setActiveVideoMetadata(title, thumbnails, videoId) {
    this.setState({
      activeVideoTitle: title,
      placeholder: thumbnails.standard.url,
      videoId
    });
  }

  render() {
    return (
      <div className="playlist-container">
        <div className="warning">
          It is recommended to select any video from the thumbnails <span>first</span>, because default video is not implemented yet
        </div>
        <VideoTitle title={this.state.activeVideoTitle}/>
        <div className="player-container">
          <Embed
            autoplay={true}
            id={this.state.videoId}
            placeholder={this.state.placeholder}
            source='youtube'
          />
        </div>
          <VideoCarousel setActiveVideoMetadata={this.setActiveVideoMetadata}/>
      </div>
    );
  }
}

export default MainPage;
