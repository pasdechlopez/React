import React, { Component } from "react";
import "./App.css";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import Switcher from "../Switcher/Switcher";
import CardNumberHolder from "../CardNumberHolder/CardNumberHolder";
import ModalButton from "../ModalButton/ModalButton";


class App extends Component {
  render() {
    return (
      <Switcher>
        <CardNumberHolder />
        <VideoPlayer />
        <ModalButton />
      </Switcher>
    );
  }
}

export default App;
