import React from 'react';
import { Link } from 'react-router-dom';

class Follower extends React.Component {
  componentDidMount() {}

  render() {
    const { login, userImage } = this.props;
    if (!login && !userImage) {
      console.log('Error: no such login detected!');
    }

    return (
      <Link to="/user/{user.login}">
        <h3>{login}</h3>
      </Link>
    );
  }
}
