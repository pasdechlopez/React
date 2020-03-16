import React, { PureComponent } from "react";
import videoFile from "./Video.mp4";
import "./VideoPlayer.css";

class VideoPlayer extends PureComponent {
  videoStatus = React.createRef();

  playVideo = () => {
    this.videoStatus.current.play();
  };
  stopVideo = () => {
    this.videoStatus.current.pause();
  };
  // resetVideo = () => {this.videoStatus.current.seekTo(0)}

  render() {
    return (
      <div className="videoWrapper">
        <video width="500px" src={videoFile} ref={this.videoStatus}></video>
        <div className="buttonWrapper">
          <button className="playButton" onClick={this.playVideo}>
            Play
          </button>
          <button className="stopButton" onClick={this.stopVideo}>
            Stop
          </button>
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
