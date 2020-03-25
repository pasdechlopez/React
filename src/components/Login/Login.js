// import React, { Component } from 'react';
// import { connect } from 'react-redux';

// export class Login extends Component {
//   state = {
//     login: '',
//     token: ''
//   };

//   componentDidUpdate() {}
//   handleChange = () => {};

//   handleSubmit = event => {
//     return (
//       event.key === 'Enter' && event.state.login !== '' && this.handleChange()
//     );
//   };

//   render() {
//     return (
//       <div className="login">
//         <div className="login__login-input">
//           <input
//             type="text"
//             onChange={this.handleChange}
//             placeholder="type ur login"
//           />
//         </div>
//         <div className="login__token-input">
//           {/* <input type="text" placeholder="type ur token" /> */}
//           <button onSubmit={this.handleSubmit}>Submit!</button>
//         </div>
//       </div>
//     );
//   }
// }

// // const mapStateToProps = state => {
// //   return isAuthorized.getIsAuthorized(state);
// // };

// // const mapDispatchToProps = {
// //   authorize
// // };

// // export default connect(mapStateToProps, mapDispatchToProps)(Login);

// export default connect()(Login);
import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import * as reactStore from '../store/actions/action';
import '../App.css';
import UserPage from '../UserPage/UserPage';

const Api = props => {
  const { username, userImage, followers, grabbedData } = this.props;

  const handleChange = e => {
    props.handleUsername(e);
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    props.submitForm(e, username);
  };

  if (props.grabbedData === true) {
    return <UserPage />;
  }

  return (
    <div className="getData">
      <input
        type="text"
        placeholder="Type ur github login"
        name="username"
        onChange={handleChange}
        id="username"
      />
      <button onClick={handleSubmitForm}>Submit!</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    username: state.username,
    repos: state.repos,
    followers: state.followers,
    message: state.message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleUsername: e => dispatch(reactStore.handleUsername(e)),
    submitForm: (e, username) => dispatch(reactStore.submitForm(e, username))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Api);
