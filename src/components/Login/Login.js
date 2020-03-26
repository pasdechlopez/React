import React from 'react';
import { connect } from 'react-redux';
// import * as reactStore from '../../actions/actions';
// import '../App.css';
import UserPage from '../UserPage/UserPage';
import { handleUsername, submitForm } from '../../actions/search';
// import * as reactStore from '../../actions/search';
// import { submitForm } from '../../github';

class Api extends React.Component {
  state = {
    searchValue: ''
  };

  changeSearchValue = event => {
    this.setState({
      searchValue: event.target.value
    });
  };

  handleSubmit = event => {
    return (
      event.key === 'Enter' &&
      this.state.searchValue !== '' &&
      this.handleChange()
    );
  };

  handleChange = () => this.props.submitForm(this.state.searchValue);

  render() {
    const { username } = this.props;
    console.log(username, 'props from login');
    return (
      <div className="get-data">
        <input
          type="text"
          placeholder="Type ur github login"
          name="username"
          onKeyPress={this.handleSubmit}
          onChange={this.changeSearchValue}
          id="username"
          value={this.state.searchValue}
        />
        <button className="login-button" onClick={this.handleChange}>
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

// const mapDispatchToProps = dispatch => {
//   return {
//     handleUsername: e => dispatch(handleUsername(e)),
//     // submitForm
//     // submitForm
//     submitForm: payload => dispatch(submitForm(payload))
//   };
// };

export default connect(mapStateToProps, { handleUsername, submitForm })(Api);
