import React, { PureComponent } from 'react';
import videoFile from './Video.mp4';
import './VideoPlayer.css';

class VideoPlayer extends PureComponent {
  render() {
    return ( 
    <div className="videofile">
      <video width="320" height="240" controls>
       <source src="videoFile" type="video/mp4">
      </video>
    </div>
     );
    
  }

}

export default VideoPlayer;
