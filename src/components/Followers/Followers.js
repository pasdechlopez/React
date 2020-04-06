import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { fetchFollowers } from '../../actions/followers';
import { fetchUserSuccess, fetchUser } from '../../actions/search';
import { getFollowers } from '../../getters';
export class Followers extends Component {
  componentDidMount() {
    const {
      fetchFollowers,

      match: {
        params: { id }
      }
    } = this.props;
    id === 'me' ? fetchFollowers('pasdechlopez') : fetchFollowers(id);
  }

  render() {
    const { followers } = this.props;
    if (!followers.length) {
      return <div>No followers? What a shame</div>;
    }
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
    followers: getFollowers(state)
  };
};

export default connect(mapStateToProps, {
  fetchFollowers,
  fetchUser,
  fetchUserSuccess
})(withRouter(Followers));
