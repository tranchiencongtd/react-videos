import React, { Component } from 'react';

class SearchBar extends Component {
  state = { term: '' };

  onTermChange = (e) => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div
        className="ui search aligned basic segment"
        style={{ marginTop: '2vh', paddingLeft: '0em', paddingRight: '0em' }}
      >
        <form onSubmit={this.onFormSubmit}>
          <div
            className="ui icon input"
            style={{ width: '100%', alignItems: 'center' }}
          >
            <input
              type="text"
              placeholder="Search"
              value={this.state.term}
              onChange={this.onTermChange}
            />
            <i className="search icon"></i>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
