// Посмотрите, какие данные и логику нужно расположить на странице, в случае с
// UserPage, нужно получить данные по пользователю, значит отправить экшен о
// получении данных. Так как нужно совершить запрос, вам понадобится 3 экшена,
// флаги сетевых запросов, редьюсер для данных и для ошибки. После отправки экшена,
// нужно убедиться что экшен действительно отправляется, это удобно делать через
// redux devtools.

import React, { Component } from 'react';
import Followers from '../Followers';

export default class UserPage extends Component {
  componentDidUpdate() {}

  render() {
    const { username, userImage, followers, isFetching, data } = this.props;
    // <SPINER></SPINER> ???
    if (isFetching == false && username == null) {
      console.log('Error: no such user found');
    }
    return (
      <div className="user-info">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
        <h2>{username}</h2>
        {userImage && <img alt="user-image" width="100px" />}
        <p className="user-info__followers">{followers}</p>
        <Followers login={this.username} />
      </div>
    );
  }
}
