import { useState } from 'react';

export const ErrorButton = () => {
  const [counter, setCounter] = useState(0);

  const handleError = () => {
    setCounter((prev) => prev + 1);
  };

  if (counter === 1) {
    // Simulate an error!
    throw new Error('I crashed!');
  }

  return (
    <div className="search-panel">
      <button
        type="submit"
        className="btn btn-outline-light"
        style={{ marginLeft: 'auto', display: 'block' }}
        onClick={handleError}
      >
        Simulate Error
      </button>
    </div>
  );
};
