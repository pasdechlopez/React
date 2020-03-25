import './Search.css';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { searchRequest } from '../../actions/search';
import ShowPreview from '../ShowPreview';
import { getRandomInt } from '../../middlewares/searchMiddleware';

export class Search extends Component {
  state = {
    searchValue: ''
  };

  changeSearchValue = event => {
    this.setState({
      searchValue: event.target.value
    });
  };
  handleSubmit = event => {
    return (
      event.key === 'Enter' &&
      this.state.searchValue !== '' &&
      this.handleChange()
    );
  };

  handleChange = () => this.props.searchRequest(this.state.searchValue);
  handleRandom = () => this.props.history.push(`/shows/${getRandomInt(30000)}`);
  // handleRandom = () =>
  //   this.props.searchRequest(this.state.searchValue, { luck: true });

  render() {
    const { result, isFetching, error } = this.props;
    if (result && isFetching) {
      return <p>Search in progress</p>;
    } else if (error) {
      return <p>Error: {error}</p>;
    }

    return (
      <Fragment>
        <div className="search">
          <input
            type="text"
            onKeyPress={this.handleSubmit}
            placeholder="Type ur request"
            onChange={this.changeSearchValue}
            value={this.state.searchValue}
          />
          <button className="search__button" onClick={this.handleChange}>
            Search
          </button>
          <button className="search__button-random" onClick={this.handleRandom}>
            Wish me luck
          </button>
        </div>

        <div className="shows">
          {result.map(series => (
            <ShowPreview
              key={series.id}
              id={series.id}
              name={series.name}
              summary={series.summary}
              image={series.image}
            />
          ))}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.search.isFetching,
  result: state.search.result,
  error: state.search.error
});

const mapDispatchToProps = {
  searchRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Search));
