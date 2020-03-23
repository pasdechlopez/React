import { Component } from 'react';
import Link from 'react-router-dom';
import './ShowPreview.css';
import React from 'react';

class ShowPreview extends Component {
  render() {
    const { id, name, summary, img } = this.props;

    return (
      <div className="preview">
        <div className="preview__wrapper">
          <Link className="wrapper__link" to={`/shows/${id}`}>
            <span>{name}</span>

            <div className="wrapper__img">
              {img && <img src={img} className={`${name}`} />}
            </div>
          </Link>
          <div dangerouslySetInnerHTML={{ __html: summary }} />
        </div>
      </div>
    );
  }
}

export default ShowPreview;
