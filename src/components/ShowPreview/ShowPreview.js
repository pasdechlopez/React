import './ShowPreview.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ShowPreview extends Component {
  render() {
    const { id, name, image, summary } = this.props;
    console.log(id, 'id');
    return (
      <div className="result-preview">
        <div className="results-preview__title">
          <Link className="title__link" to={`/shows/${id}`}>
            <h3>{name}</h3>
          </Link>
          {image && <img src={image} className={name} />}
        </div>
        <div
          className="result-description"
          dangerouslySetInnerHTML={{ __html: summary }}
        />
      </div>
    );
  }
}
