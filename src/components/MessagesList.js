import React, { Component } from 'react';
import ReactDOM from 'react-dom'

class MessagesList extends React.Component {

    componentWillUpdate() {
        const node = ReactDOM.findDOMNode
    }

    //screen behaviour in case of new messages appearence
    componentDidUpdate() {
        const node = ReactDOM.findDOMNode(this)
        node.scrollTop = node.scrollHeight
    }

    render() {
        return (
            <div className="message-list">
                {this.props.messages.map((message, index) => {
                    return (
                      <li  key={message.index} className="message">
                        <div>{message.senderId}</div>
                        <div>{message.text}</div>
                      </li>
                    )
                })}
            </div>
        )
    }
}

export default MessagesList;