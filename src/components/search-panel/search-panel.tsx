import useSearchQuery from '../../hooks/use-search-query';

import './search-panel.css';

interface SearchPanelProps {
  onSearch: (searchStr: string) => void;
}

const SearchPanel: React.FC<SearchPanelProps> = ({ onSearch }) => {
  const [searchStr, setSearchStr] = useSearchQuery();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchStr(event.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchStr);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearchClick();
    }
  };

  return (
    <div className="wrap">
      <input
        type="text"
        className="form-control search-input"
        placeholder="Search pokemon"
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        value={searchStr}
      />
      <button
        type="submit"
        className="btn btn-outline-light"
        onClick={handleSearchClick}
      >
        Search
      </button>
    </div>
  );
};

export { SearchPanel };
