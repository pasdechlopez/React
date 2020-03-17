import React, { Component } from "react";
import Title from "./components/Title";
import SendMessages from "./components/SendMessages";
import MessagesList from "./components/MessagesList";
import Chatkit from "@pusher/chatkit-client";

class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: []
    };
    this.sendMessage = this.sendMessage.bind(this);
  }
  //chatkit upload after rendering
  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator: "v1:us1:7f27d25f-44d2-46b9-99f4-381eb27e9e25",
      userId: "pasdechlopez",

      tokenProvider: new Chatkit.TokenProvider({
        url:
          "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/7f27d25f-44d2-46b9-99f4-381eb27e9e25/token"
      })
    });

    chatManager.connect().then(currentUser => {
      this.currentUser = currentUser;
      this.currentUser.subscribeToRoom({
        roomId: "188ce993-5c48-458c-a447-3ac912116808",
        hooks: {
          onMessage: message => {
            console.log(message);
            this.setState({
              messages: [...this.state.messages, message]
            });
          }
        }
      });
    });
  }

  sendMessage(text) {
    this.currentUser.sendMessage({
      text,
      roomId: "188ce993-5c48-458c-a447-3ac912116808"
    });
  }

  render() {
    return (
      <div className="app">
        <Title />
        <MessagesList
          roomId={this.state.roomId}
          messages={this.state.messages}
        />
        <SendMessages sendMessage={this.sendMessage} />
      </div>
    );
  }
}

export default Chat;
