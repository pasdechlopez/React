import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { handleFollowers } from '../../actions/followers';
import { handleUser, submitForm } from '../../actions/search';
export class Followers extends Component {
  handleChange = ({ login }) => {
    this.props.submitForm(login, {
      currentToken: localStorage.getItem('currentToken')
    });
    this.props.handleFollowers();
  };
  render() {
    console.log('props from followers', this.props);
    const { followers } = this.props;
    if (!followers) {
      return <div></div>;
    }
    return (
      <div className="followers">
        {followers.map(function(follower, index) {
          return (
            <div key={index} className="follower">
              <Link
                className="follower"
                to={`/users/${follower.login}`}
                onClick={() => this.handleChange(`${follower.login}`)}
              >
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

export default connect(mapStateToProps, {
  handleFollowers,
  submitForm,
  handleUser
})(Followers);
