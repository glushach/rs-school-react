import { Component } from 'react';
import './search-panel.css';

interface SearchPanelProps {
  onSearch: (searchStr: string) => void;
}

interface SearchPanelState {
  searchStr: string;
}

class SearchPanel extends Component<SearchPanelProps, SearchPanelState> {
  state = {
    searchStr: localStorage.getItem('searchStr') || '',
  };

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchStr: event.target.value });
  };

  handleSearchClick = async () => {
    const { searchStr } = this.state;
    localStorage.setItem('searchStr', searchStr);
    this.props.onSearch(searchStr);
  };

  handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      this.handleSearchClick();
    }
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
          onKeyDown={this.handleKeyPress}
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
