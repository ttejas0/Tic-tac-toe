import { useState, useEffect } from 'react'
import React from 'react'
import Board from './Board/Board'

const checkWinner = (square, setStrikeClass, setWinner) =>{
  const winningCombos = [
    { combo: [0, 1, 2], strikeClass: "strike-row-1"}, 
    { combo: [3, 4, 5], strikeClass: "strike-row-2"}, 
    { combo: [6, 7, 8], strikeClass: "strike-row-3"}, 
    { combo: [0, 4, 8], strikeClass: "strike-diagonal-1"}, 
    { combo: [2, 4, 6], strikeClass: "strike-diagonal-2"}, 
    { combo: [0, 3, 6], strikeClass: "strike-column-1"}, 
    { combo: [1, 4, 7], strikeClass: "strike-column-2"}, 
    { combo: [2, 5, 8], strikeClass: "strike-column-3"}, 
  ];
  for(const { combo, strikeclass } of winningCombos){
      const [a,b,c] = combo;
      if(cells[a] && cells[a] === cells[b] && cells[a] === cells[c]){
        setStrikeClass(strikeclass);
        if (cells[a] === "X"){
          setWinner("X");
        } else {
          setWinner("O");
        }
        return;
      }
  }
  const isDraw = square.every((square) => cell !== nuull);
  setWinner(isDraw ? "draw" : null);
};

const TicTacToe = ()=> {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  const [strikeClass, setStrikeClass] = useState("hidden");
  const [winner, setWinner] = useState("");


  const handelSquareClick = (index)=>{
    // Return if square already contents a value
    if (square[index] !== null) return;
   // Create a new array to add each square index 
    const newSquare = [...square];
    newSquare[index] = player;
   // set square array to the new Array
    setSquare(newSquare);
   // switch between X and O based on player turn
    setPlayer(player === "X" ? "O" : "X");
  }
  useEffect(()=>{

  }, [square]);

  return (
    <div className='py-8'>
      <Board 
      square={square} 
      squareClick={handelSquareClick}
      strikeClass={strikeClass}
      />
    </div>
  )
}

export default TicTacToe