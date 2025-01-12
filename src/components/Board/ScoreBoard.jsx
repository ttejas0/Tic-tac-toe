import React, { useState, useEffect } from 'react'

function ScoreBoard({ winner }) {

  const [xCount, setXCount] = useState(0);
  const [OCount, setOCount] = useState(0);
  const [tieCount, setTieCount] = useState(0);

    useEffect(() => {
      
      if(winner === "X"){
      setXCount((prev) => prev + 1);
    } else if(winner === "O"){
      setOCount((prev) => prev + 1);
    }
    if(winner === "draw"){
      setTieCount((prev) => prev + 1);
    }
  
  }, [winner]);
  return (
    <>
    <div className='flex items-center bg-gray-200 px-10 py-6 rounded-xl mt-5'>
      <div className="text-xl text-Custom-Slate-Blue font-extrabold pl-0 pr-20">Player X: {xCount}</div>
      <div className="text-xl text-Custom-Slate-Blue font-extrabold p-0 m-0">Tie: {tieCount}</div>
      <div className="text-xl text-Custom-Slate-Blue font-extrabold pr-0 pl-20">Player O: {OCount}</div>
    </div>
    </>
  )
}

export default ScoreBoard