import React from 'react';
import Title from './components/Title'
import SendMessages from './components/SendMessages'

class Chat extends React.Component {
  
    render() {
        return (
            <div className="app">
              <Title />
              <SendMessages/>
            </div>
        );
    }
}

export default Chat;