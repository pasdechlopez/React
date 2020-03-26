import React from 'react';
import { connect } from 'react-redux';
import * as reactStore from '../../actions/actions';
// import '../App.css';
import UserPage from '../UserPage/UserPage';
import { handleUsername, submitForm } from '../../actions/actions';

class Api extends React.Component {
  handleChange = e => {
    this.props.handleUsername(e);
  };

  handleSubmitForm = e => {
    e.preventDefault();
    return this.props.submitForm(e, this.props.username);
  };
  handleEnter = e => {
    return e.key === 'Enter' && this.props.submitForm(e, this.props.username);
  };
  // if (this.props.followers == '') {
  //   return (
  //     <div className="404">
  //       No such user found :(
  //     </div>
  //   )
  // }

  render() {
    console.log(this.props, 'login comp');

    return (
      <div className="get-data">
        <input
          type="text"
          placeholder="Type ur github login"
          name="username"
          onChange={this.handleChange}
          id="username"
        />
        <button
          className="login-button"
          onClick={this.handleSubmitForm}
          onKeyPress={this.handleEnter}
        >
          Submit!
        </button>
        {<UserPage />}
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
    image_url: state.image_url,
    choosenUser: state.choosenUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleUsername: e => dispatch(reactStore.handleUsername(e)),
    submitForm: (e, username) => dispatch(reactStore.submitForm(e, username))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Api);
