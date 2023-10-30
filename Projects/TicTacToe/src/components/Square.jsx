import React from 'react';

function Square({ value, onClick, isWinningSquare }) {
  return (
    <button
      type="button"
      className={`square ${value === 'X' ? 'text-green' : 'text-orange'} ${
        isWinningSquare ? 'winning' : ''
      }`}
      onClick={onClick}
    >
      <div>{value}</div>
    </button>
  );
}

export default Square;
