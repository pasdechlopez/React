import './ShowPage.css';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { showRequest } from '../../actions/show';

export class ShowPage extends Component {
  componentWillMount() {
    const { showRequest, match } = this.props;
    showRequest(match.params.id);
    console.log(this.props, 'show');
  }

  render() {
    const { show } = this.props;
    if (!show.name) {
      return null;
    }

    return (
      <Fragment>
        <div className="show-page">
          <p>{show.name}</p>
          {show.image && <img src={show.image.medium} alt={show.name} />}
          <div
            className="show-summary"
            dangerouslySetInnerHTML={{ __html: show.summary }}
          />
          <div className="actors">
            {show._embedded.cast.map(({ person }, index) => (
              <div key={index} className="show-person">
                <p>{person.name}</p>
                {person.image && (
                  <img
                    alt={person.name}
                    width="150px"
                    src={person.image.medium}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.shows.isFetching,
  show: state.shows.show
});

const mapDispatchToProps = {
  showRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowPage);
