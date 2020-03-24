import './Search.css';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { searchRequest } from '../../actions/search';
import ShowPreview from '../ShowPreview';

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
  handleChange = event => {
    this.setState({
      searchValue: ''
    });
    this.props.searchRequest(this.state.searchValue);
  };

  render() {
    const { result, isFetching, error } = this.props;
    console.log(this.props, 'thi');
    if (isFetching) {
      return <p>Search in progress</p>;
    }

    if (error) {
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
        </div>

        <div className="shows">
          {result.map(series => (
            <ShowPreview
              key={series.id}
              id={series.id}
              name={series.name}
              summary={series.summary}
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

export default connect(mapStateToProps, mapDispatchToProps)(Search);
