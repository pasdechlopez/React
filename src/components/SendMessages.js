import React from "react";

class SendMessages extends React.Component {
  state = {
    message: "",
    messages: []
  };

  handleChange = e => {
    this.setState({
      message: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.state.message !== ""
      ? this.setState({
          messages: [...this.state.messages, { text: this.state.message }],
          message: ""
        })
      : console.log("Empty messsage!");
  };

  bottom = React.createRef();
  scrollRefDown = () =>
    this.bottom.current.scrollTo(0, this.bottom.current.scrollHeight);
  componentDidUpdate(...args) {
    const [, prevState] = args;
    const { messages: prevMessages } = prevState;
    const {
      state: { messages },
      scrollRefDown
    } = this;
    if (messages.length > prevMessages.length) {
      scrollRefDown();
    }
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
