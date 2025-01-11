import React from 'react'
import Square from './Square'
import '../styles/Board.css'

const Board = ({square, squareClick, strikeClass, player, winner, reset }) => {
  return (
    <div className='flex flex-col'>
      <div className='grid grid-cols-3 grid-rows-3 relative'>
        <Square 
        value={square[0]} 
        onClick={()=> squareClick(0)} 
        className="border-r-8 border-b-8"
        player={player}
        />
        <Square 
        value={square[1]} 
        onClick={()=> squareClick(1)} 
        className="border-r-8 border-b-8"
        player={player}
        />
        <Square 
        value={square[2]} 
        onClick={()=> squareClick(2)} 
        className="border-r-8 border-b-8"
        player={player}
        />
        <Square 
        value={square[3]} 
        onClick={()=> squareClick(3)} 
        className="border-r-8 border-b-8"
        player={player}
        />
        <Square 
        value={square[4]} 
        onClick={()=> squareClick(4)} 
        className="border-r-8 border-b-8"
        player={player}
        />
        <Square 
        value={square[5]} 
        onClick={()=> squareClick(5)} 
        className="border-r-8 border-b-8"
        player={player}
        />
        <Square 
        value={square[6]} 
        onClick={()=> squareClick(6)} 
        className="border-r-8 border-b-8"
        player={player}
        />
        <Square 
        value={square[7]} 
        onClick={()=> squareClick(7)} 
        className="border-r-8 border-b-8"
        player={player}
        />
        <Square 
        value={square[8]} 
        onClick={()=> squareClick(8)} 
        className="border-r-8 border-b-8"
        player={player}
        />
          
        <div className={`absolute w-full bg-red-600 z-40 ${strikeClass}`}></div>
      </div>
      {winner && (
        <div className="flex justify-center mt-16 border-4 rounded-lg p-4 bg-Custom-Slate-Blue">
          <h3 className="text-4xl font-extrabold">
            {winner === "draw" ? "Its a Tie" : `Player ${winner} Wins!`}
          </h3>
        </div>
      )}
      <div className="flex justify-center mt-16 border-4 p-4 text-4xl rounded-lg bg-Custom-Slate-Blue">
        <button className='text-4xl font-extrabold' onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default Board