import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { handleFollowers } from '../../actions/followers';
export class Followers extends Component {
  render() {
    console.log('props from followers', this.props);
    const { followers } = this.props;
    return (
      <div className="followers">
        {followers.map(function(follower, index) {
          return (
            <div key={index} className="follower">
              <Link className="follower" to={`/users/${follower.login}`}>
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
    user: state,
    followers: state.followersReducer.followers,
    followersList: state.followersList
  };
};

export default connect(mapStateToProps, handleFollowers)(Followers);
