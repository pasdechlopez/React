import React from 'react';
import { connect } from 'react-redux';
// import * as reactStore from '../../actions/actions';
// import '../App.css';
import UserPage from '../UserPage/UserPage';
import { handleSuccess, submitForm } from '../../actions/search';

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

  handleChange = () =>
    this.props.submitForm(this.state.searchValue, {
      currentToken: this.props.token
    });

  render() {
    const { user } = this.props;
    console.log(this.props, 'props from search');
    return (
      <div className="search">
        <input
          type="text"
          placeholder="Type a user's login"
          name="username"
          onKeyPress={this.handleSubmit}
          onChange={this.changeSearchValue}
          id="username"
          value={this.state.searchValue}
        />
        <button className="login-button" onClick={this.handleChange}>
          Search!
        </button>
        {user && user.name && <UserPage />}
        {this.props.error && user.name !== '' && (
          <div className="handle-failure">No user found</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.searchReducer.user,
    error: state.error,
    token: state.authReducer.token.token
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     handleSuccess: e => dispatch(handleSuccess(e)),
//     // submitForm
//     // submitForm
//     submitForm: payload => dispatch(submitForm(payload))
//   };
// };

export default connect(mapStateToProps, { handleSuccess, submitForm })(Api);
