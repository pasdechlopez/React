import React, {
  Component
} from 'react';
import './App.css';
import VideoPlayer from './components/VideoPlayer/VideoPlayer'
import Switcher from '../Switcher';

class App extends Component {
  render() {
    return ( <
      Switcher > {
        /* // <CardNumberHolder /> */ } <
      VideoPlayer / >
      <
      /Switcher>
    );
  }
}

export default App;