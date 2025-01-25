import { Component } from 'react';

import './search-panel.css';

class SearchPanel extends Component {
  state = {
    searchStr: '',
  };

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchStr: event.target.value });
  };

  handleSearchClick = () => {
    const { searchStr } = this.state;
    localStorage.setItem('searchStr', searchStr);
  };

  render() {
    return (
      <div className="wrap">
        <input
          type="text"
          className="form-control search-input"
          placeholder="Search pokemon"
          value={this.state.searchStr}
          onChange={this.handleInputChange}
        />
        <button
          type="submit"
          className="btn btn-outline-light"
          onClick={this.handleSearchClick}
        >
          Search
        </button>
      </div>
    );
  }
}

export { SearchPanel };
