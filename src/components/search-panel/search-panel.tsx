import './search-panel.css';

const SearchPanel = () => {
  return (
    <div className="wrap">
      <input
        type="text"
        className="form-control search-input"
        placeholder="Найти сотрудника"
      />
      <button type="submit" className="btn btn-outline-light">
        Поиск
      </button>
    </div>
  );
};

export { SearchPanel };
