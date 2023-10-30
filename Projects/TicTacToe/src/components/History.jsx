import React from 'react';

const History = ({ history, moveTo, currentMove }) => {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {history.map((history, ind) => (
          <li key={ind}>
            <button
              type="button "
              className={`btn-move ${currentMove === ind ? 'active' : ''}`}
              onClick={() => {
                moveTo(ind);
              }}
            >
              {ind === 0 ? ' New Game' : `Go to move ${ind}`}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
