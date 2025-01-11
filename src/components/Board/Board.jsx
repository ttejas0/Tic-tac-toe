import React from 'react'
import Square from './Square'
import '../styles/Board.css'

const Board = ({square, squareClick, strikeClass}) => {
  return (
    <div className='flex flex-col'>
      <div className='grid grid-cols-3 grid-rows-3 relative'>
        <Square value={square[0]} onClick={()=> squareClick(0)} />
        <Square value={square[1]} onClick={()=> squareClick(1)} />
        <Square value={square[2]} onClick={()=> squareClick(2)} />
        <Square value={square[3]} onClick={()=> squareClick(3)} />
        <Square value={square[4]} onClick={()=> squareClick(4)} />
        <Square value={square[5]} onClick={()=> squareClick(5)} />
        <Square value={square[6]} onClick={()=> squareClick(6)} />
        <Square value={square[7]} onClick={()=> squareClick(7)} />
        <Square value={square[8]} onClick={()=> squareClick(8)} />
          
        <div className={`absolute w-full bg-red-600 z-40 ${strikeClass}`}></div>
      </div>
    </div>
  )
}

export default Board