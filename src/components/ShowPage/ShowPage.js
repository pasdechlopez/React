import './ShowPage.css';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { showRequest } from '../../actions/show';

export class ShowPage extends Component {
  componentWillUpdate() {
    const { showRequest, match } = this.props;
    showRequest(match.params.id);
  }

  render() {
    const { entity } = this.props;

    if (!entity.name) {
      return null;
    }

    return (
      <div>
        <Fragment>
          <p>{entity.name}</p>
          {entity.image && <img src={entity.image.medium} alt={entity.name} />}
          <div
            className="show-summary"
            dangerouslySetInnerHTML={{ __html: entity.summary }}
          />
          <div className="actors">
            {entity._embedded.cast.map(({ person }, index) => (
              <div key={index} className="show-person">
                <p>{person.name}</p>
                {person.image && (
                  <img alt={person.name} src={person.image.medium} />
                )}
              </div>
            ))}
          </div>
        </Fragment>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.shows.isFetching,
  entity: state.shows.entity
});

const mapDispatchToProps = {
  showRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowPage);
