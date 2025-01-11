import React from "react";
import Reset from "./components/Buttons/Reset";
import ScoreBoard from "./components/Board/ScoreBoard";
import TicTacToe from "./components/TicTacToe"

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center">
          <ScoreBoard />
          <TicTacToe/>
          <Reset />
          </div>
    </>
  );
}

export default App;
