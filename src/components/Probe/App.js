
import React, { Component } from 'react';
import ChatMessage from './components/ChatMessage';
import Signup from './components/Signup';
import ChatApp from './components/ChatApp';

import { default as Chatkit } from '@pusher/chatkit-server';

const chatkit = new Chatkit({
  instanceLocator: "v1:us1:7f27d25f-44d2-46b9-99f4-381eb27e9e25",
  key: "e93672ce-804f-4667-8ba2-ebe3fe07dc80:pnQJkElj15+UC3+ZwOqZvJXbsWqH6kqI2PcN9OY9RcU="
})


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUsername: '',
      currentId: '',
      currentView: 'chatApp'
    }
    this.changeView = this.changeView.bind(this);
    this.createUser = this.createUser.bind(this);
  }
  createUser(username) {
    chatkit.createUser({
      id: username,
      name: username,
    })
      .then((currentUser) => {
        this.setState({
          currentUsername: username,
          currentId: username,
          currentView: 'chatApp'
        })
      }).catch((err) => {
        if (err.status === 400) {
          this.setState({
            currentUsername: username,
            currentId: username,
            currentView: 'chatApp'
          })
        } else {
          console.log(err.status);
        }
      });
  }

  changeView(view) {
    this.setState({
      currentView: view
    })
  }

  render() {
    let view = '';

    if (this.state.currentView === "ChatMessage") {
      view = <ChatMessage changeView={this.changeView} />
    // } else if (this.state.currentView === "signup") {
    //   view = <Signup onSubmit={this.createUser} />
    // 
      } else if (this.state.currentView === "chatApp") {
      view = <ChatApp currentId={this.state.currentId} />
    }
    return (
      <div className="App">
        {view}
      </div>
    );
  }
}
export default App;
