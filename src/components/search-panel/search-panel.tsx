import { useEffect, useRef } from 'react';
import useSearchQuery from '../../hooks/use-search-query';

import './search-panel.css';

interface SearchPanelProps {
  onSearch: (searchStr: string) => void;
}

const SearchPanel: React.FC<SearchPanelProps> = ({ onSearch }) => {
  const [searchStr, setSearchStr] = useSearchQuery();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearchClick = () => {
    if (inputRef.current) {
      setSearchStr(inputRef.current.value);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearchClick();
    }
  };

  useEffect(() => {
    if (searchStr) {
      onSearch(searchStr);
    }
  }, [searchStr, onSearch]);

  return (
    <div className="wrap">
      <input
        type="text"
        className="form-control search-input"
        placeholder="Search pokemon"
        onKeyDown={handleKeyPress}
        ref={inputRef}
        defaultValue={searchStr}
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
