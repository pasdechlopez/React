import React, { Component } from "react";
import "./App.css";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import Switcher from "./components/Switcher/Switcher";

import CardNumberHolder from "./components/CardNumberHolder/CardNumberHolder";

class App extends Component {
  render() {
    return (
      <Switcher>
        <CardNumberHolder />
         <VideoPlayer />
      </Switcher>
    );
  }
}

export default App;
