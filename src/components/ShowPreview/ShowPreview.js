import './ShowPreview.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

export default class ShowPreview extends Component {
  render() {
    const { id, name, image, summary } = this.props;
    console.log(typeof summary);
    console.log('parser', ReactHtmlParser(summary));
    return (
      <div className="result-preview">
        <div className="results-preview__title">
          <Link className="title__link" to={`/shows/${id}`}>
            <h3>{name}</h3>
          </Link>
          {image && (
            <img src={image.medium} width="200px" alt="name" className={name} />
          )}
        </div>
        <div
          className="result-description"
          // dangerouslySetInnerHTML={{ __html: summary }}
        >
          {ReactHtmlParser(summary)}
        </div>
      </div>
    );
  }
}
