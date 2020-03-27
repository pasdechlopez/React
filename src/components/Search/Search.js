import React from 'react';
import { connect } from 'react-redux';
// import * as reactStore from '../../actions/actions';
// import '../App.css';
import UserPage from '../UserPage/UserPage';
import { handleSuccess, submitForm } from '../../actions/search';
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
    const { user } = this.props;
    console.log(this.props.choosenUser, 'props from login');

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
        {user && user.name && <UserPage choosenUser={this.state.searchValue} />}
        {this.props.error && user.name !== '' && (
          <div className="handle-failure">No user found</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    username: state.username,
    error: state.error,
    choosenUser: state.choosenUser
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
