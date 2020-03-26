// Посмотрите, какие данные и логику нужно расположить на странице, в случае с
// UserPage, нужно получить данные по пользователю, значит отправить экшен о
// получении данных. Так как нужно совершить запрос, вам понадобится 3 экшена,
// флаги сетевых запросов, редьюсер для данных и для ошибки. После отправки экшена,
// нужно убедиться что экшен действительно отправляется, это удобно делать через
// redux devtools.

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Followers from '../Followers/Followers';
import { Link } from 'react-router-dom';

export class UserPage extends Component {
  render() {
    console.log('userpage inited', this.props);
    const {
      username,
      image_url,
      followers,
      following,
      choosenUser
    } = this.props;

    console.log('follower page inited');

    return (
      <div className="folloooooooooooooo">
        {/* <h2>{choosenUser}</h2>
        {image_url && (
          <img
            alt="user-image"
            className="user-image"
            src={image_url}
            width="100px"
          />
        )}
        <p className="user-info__followers user-info">
          <Link to="/followers">Followers: {followers}</Link>
        </p>
        <p className="user-info__following user-info">Following: {following}</p> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.username,
    userImage: state.userImage,
    followers: state.followers
  };
};

export default connect(mapStateToProps, null)(UserPage);
