import React, {Component} from 'react';

class Send extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({
            message: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state.message);
        this.setState({
            message: ''
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="send-field">
                <input className="message-send" type="text" onChange={this.handleChange} value={this.state.message}/>
                <input className="message-submit" type="submit" value="SEND" />   
            </form>
        )
    }
}
export default Send;