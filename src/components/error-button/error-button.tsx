import './error-button.css';

export function ErrorButton() {
  return (
    <div className="search-panel">
      <button
        type="submit"
        className="btn btn-outline-light"
        style={{ marginLeft: 'auto', display: 'block' }}
      >
        Error
      </button>
    </div>
  );
}
