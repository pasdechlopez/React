import React from 'react';
import { connect } from 'react-redux';
import * as reactStore from '../../actions/actions';
// import '../App.css';
import UserPage from '../UserPage/UserPage';
import { handleUsername, submitForm } from '../../actions/actions';

class Api extends React.Component {
  // const { username, userImage, followers, grabbedData } = this.props;

  handleChange = e => {
    this.props.handleUsername(e);
  };

  handleSubmitForm = e => {
    e.preventDefault();
    this.props.submitForm(e, this.props.username);
  };

  render() {
    console.log(this.props, 'username', this.props);
    return (
      <div className="get-data">
        <input
          type="text"
          placeholder="Type ur github login"
          name="username"
          onChange={this.handleChange}
          id="username"
        />
        <button className="login-button" onClick={this.handleSubmitForm}>
          Submit!
        </button>
        {this.props.followers !== '' && <UserPage />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.username,
    repos: state.repos,
    followers: state.followers,
    message: state.message,
    image_url: state.image_url
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleUsername: e => dispatch(reactStore.handleUsername(e)),
    submitForm: (e, username) => dispatch(reactStore.submitForm(e, username))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Api);
