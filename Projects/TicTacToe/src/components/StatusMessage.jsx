import React from 'react';

const StatusMessage = ({ winner, gamingBoard }) => {
  const { squares, isXNext } = gamingBoard;
  const noMovesLeft = squares.every(squareValue => squareValue !== null);
  const nextPlayer = isXNext ? 'X' : 'O';
  const renderStatusMessage = () => {
    if (winner) {
      return (
        <div>
          Winner is &nbsp;
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </div>
      );
    }
    if (!winner && noMovesLeft) {
      return (
        <div>
          <span className="text-orange">O </span>and &nbsp;
          <span className="text-green">X </span> &nbsp;tied
        </div>
      );
    }
    if (!winner && !noMovesLeft) {
      return (
        <div>
          Next Player is &nbsp;
          <span className={isXNext ? 'text-green' : 'text-orange'}>
            {nextPlayer}
          </span>
        </div>
      );
    }
    return null;
  };
  return <div className="status-message">{renderStatusMessage()}</div>;
};

export default StatusMessage;
