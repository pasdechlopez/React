import React, { Component } from 'react';
import getUserFollowers from '../../actions/actions';
import { connect } from 'react-redux';

export class Followers extends Component {
  render() {
    const { followersList } = this.props;

    console.log('followersList', this.props);
    return <div className="followers"></div>;
  }
}

const mapStateToProps = state => {
  return {
    username: state.username,
    followers: state.followers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUsersFollowers: (e, username) =>
      dispatch(this.getUserFollowers(e, username))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Followers);
