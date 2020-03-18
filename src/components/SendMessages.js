import React from 'react';

class SendMessages extends React.Component {
  state = {
    message: '',
    messages: []
  };

  handleChange = e => {
    this.setState({
      message: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.state.message !== ''
      ? this.setState({
          messages: [...this.state.messages, { text: this.state.message }],
          message: ''
        })
      : console.log('Empty messsage!');
  };

  bottom = React.createRef();
  scrollToMyRef = () => window.scrollTo(0, this.bottom.current.scrollHeight);
  componentDidUpdate() {
    // this.bottom.current.scrollTop = this.bottom.current.scrollHeight;
    this.scrollToMyRef();
  }

  render() {
    const {
      bottom,
      handleChange,
      handleSubmit,
      state: { messages, message }
    } = this;
    console.log(this.state.messages);
    return (
      <div className="message-list">
        <div className="messages" ref={bottom}>
          <ul>
            {messages.map((message, index) => {
              return (
                <li key={index} className="message">
                  {message.text}
                </li>
              );
            })}
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="send-message-form">
          <input
            onChange={handleChange}
            value={message}
            placeholder="Type your message and hit ENTER"
            type="text"
          />
        </form>
      </div>
    );
  }
}

export default SendMessages;
