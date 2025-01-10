import React from 'react'

function ScoreBoard() {
  return (
    <>
    <div className='flex items-center bg-gray-200 px-52 py-10 rounded-xl'>
      <div className="text-xl text-Custom-Slate-Blue font-extrabold pl-0 pr-32">Player X: 0</div>
      <div className="text-xl text-Custom-Slate-Blue font-extrabold pr-0 pl-32">Player O: 0</div>
    </div>
    </>
  )
}

export default ScoreBoard