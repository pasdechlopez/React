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
  scrollToMyRef = () => window.scrollTo(0, this.bottom.current);
  componentDidUpdate() {
    this.bottom.current.scrollTop = this.bottom.current.scrollHeight;
  }

  render() {
    console.log(this.state.messages);
    return (
      <div className="message-list">
        <div className="messages" ref={this.bottom}>
          <ul>
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
