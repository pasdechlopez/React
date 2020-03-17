import React from 'react';

class SendMessages extends React.Component {
  state = {
    message: '',
    messages: []
  };

  //   componentDidUpdate() {
  //     const node = ReactDOM.findDOMNode(this)
  //     node.scrollTop = node.scrollHeight
  //     }

  // VS

  handleChange = e => {
    this.setState({
      message: e.target.value
    });
  };

  handleSubmit = e => {
    const {
      state: { message },
      state: { messages },
      setState
    } = this;
    e.preventDefault();
    message !== ''
      ? this.setState({
          messages: [...messages, { text: message }],
          message: ''
        })
      : console.log('Empty messsage!');
  };

  bottom = React.createRef();

  scrollToBottom = () => {
    const {
      bottom: { current: listNode }
    } = this;
    window.listNode = listNode;
  };

  componentDidMount() {
    console.log(this.bottom.current);
    this.scrollToBottom();
  }

  render() {
    console.log(this.state.messages);
    return (
      <div className="message-list">
        <div className="messages">
          <ul ref={this.bottom}>
            {this.state.messages.map((message, index) => {
              return (
                <li key={index} className="message">
                  {message.text}
                </li>
              );
            })}
          </ul>
        </div>

        <form onSubmit={this.handleSubmit} className="send-message-form">
          <input
            onChange={this.handleChange}
            value={this.state.message}
            placeholder="Type your message and hit ENTER"
            type="text"
          />
        </form>
      </div>
    );
  }
}

export default SendMessages;
