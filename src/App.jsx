import React from "react";
import ScoreBoard from "./components/Board/ScoreBoard";
import TicTacToe from "./components/TicTacToe"

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center">
          <ScoreBoard />
          <TicTacToe />
          </div>
    </>
  );
}

export default App;
