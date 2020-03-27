import React, { Component } from 'react';
import getUserFollowers from '../../actions/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class Followers extends Component {
  render() {
    // const { followersList } = this.props;
    let followers = [];
    console.log('props from followers', this.state);

    console.log('props from followers', this.props);
    // for (let j = 0; j < followersList.length; j++) {
    //   followers.push(followersList[j]);
    // }
    // console.log('followersList', followers[1]);
    if (this.props.fff) {
      return false;
    }
    return (
      <div className="followers">
        {followers.map(function(follower, index) {
          return (
            <div key={index} className="follower">
              <Link className="follower" to={`/followers/${follower.id}`}>
                {follower.login}

                {follower.avatar_url && (
                  <img
                    alt="user-image"
                    className="follower-image"
                    src={follower.avatar_url}
                    width="50px"
                  />
                )}
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    followers: state.followers,
    followersList: state.followersList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUsersFollowers: (e, username) =>
      dispatch(this.getUserFollowers(e, username))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Followers);
