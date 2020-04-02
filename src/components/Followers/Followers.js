import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { handleFollowers } from '../../actions/followers';
import { searchSuccess, fetchUser } from '../../actions/search';
export class Followers extends Component {
  componentDidMount() {
    const {
      currentId,
      handleFollowers,
      foundUser,
      isFetched,
      match: {
        params: { id }
      }
    } = this.props;
    id === 'me' ? handleFollowers('pasdechlopez') : handleFollowers(id);
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps, 'isNew from followers');
    const {
      fetchUser,
      followers: prevFollowers,
      match: {
        params: { id: prevId }
      }
    } = prevProps;
    const {
      handleFollowers,
      followers,
      match: {
        params: { id }
      }
    } = this.props;
    if (prevFollowers !== followers) {
      // id === 'me' ? handleFollowers('pasdechlopez') : handleFollowers(id);
    }
  }

  render() {
    const { followers, isFetched, handleFollowers, id, history } = this.props;
    console.log(this.props, 'props from FOllowers');
    if (!followers) {
      return <div></div>;
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
    user: state,
    followers: state.followersReducer.followers,
    currentId: state.searchReducer.foundUser.login
  };
};

export default connect(mapStateToProps, {
  handleFollowers,
  fetchUser,
  searchSuccess
})(withRouter(Followers));
