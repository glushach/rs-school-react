import React from 'react';
import './error-description.css';

interface ErrorDescriptionProps {
  message: string;
  onReset: () => void;
}

export const ErrorDescription: React.FC<ErrorDescriptionProps> = ({
  message,
  onReset,
}) => {
  return (
    <div className="error">
      <p className="error-text">{message}</p>
      {message === 'Error: I crashed!' && (
        <button className="btn btn-outline-light" onClick={onReset}>
          Go home
        </button>
      )}
    </div>
  );
};
