import { useState } from 'react';
import './style.scss';
import Square from './components/Square';
import Board from './components/Board';
import { calculateWinner } from './winner';
import StatusMessage from './components/StatusMessage';
import History from './components/History';
const NEW_GAME = [{ squares: Array(9).fill(null), isXNext: false }];
function App() {
  const [history, setHistory] = useState(NEW_GAME);
  const [currentMove, setCurrentMove] = useState(0);
  const gamingBoard = history[currentMove];
  const { winner, winningSquares } = calculateWinner(gamingBoard.squares);
  console.log({ historyLength: history.length, currentMove });

  const handleSquareClick = clickedPosition => {
    //
    if (gamingBoard.squares[clickedPosition] || winner) {
      return;
    }

    setHistory(currentHistory => {
      const isTraversing = currentMove + 1 !== currentHistory.length;

      const lastGamingState = isTraversing
        ? currentHistory[currentMove]
        : history[history.length - 1];

      const nextSquareState = lastGamingState.squares.map(
        (squareValue, position) => {
          if (clickedPosition === position) {
            return lastGamingState.isXNext ? 'X' : 'O';
            // return 'X';
          }
          return squareValue;
        }
      );
      const base = isTraversing
        ? currentHistory.slice(0, currentHistory.indexOf(lastGamingState) + 1)
        : currentHistory;
      return base.concat({
        squares: nextSquareState,
        isXNext: !lastGamingState.isXNext,
      });
    });
    setCurrentMove(move => move + 1);
  };
  const moveTo = move => {
    setCurrentMove(move);
  };
  const resetGame = () => {
    setHistory(prevHistory => NEW_GAME);
    setCurrentMove(0);
  };
  return (
    <div className="app">
      <h1>
        Tic <span className="text-green"> Tac</span> Toe
      </h1>
      <StatusMessage winner={winner} gamingBoard={gamingBoard} />
      <Board
        winningSquares={winningSquares}
        squares={gamingBoard.squares}
        handleSquareClick={handleSquareClick}
      />
      <div className="bg-balls"></div>
      <button
        type="button"
        onClick={resetGame}
        className={`btn-reset ${winner ? 'active' : '    '}`}
      >
        Reset Game
      </button>
      <h2
        style={{
          fontWeight: 'normal',
        }}
      >
        {' '}
        Current Game History
      </h2>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
}

export default App;
