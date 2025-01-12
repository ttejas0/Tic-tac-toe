import React from 'react'

const Square = ({onClick, value, className, player})=> {
  let hoverClass = null;
  if(value == null && player != null){
    hoverClass = `${player.toLowerCase()}-hover`;
  }
    return (
      <button className={`square w-20 h-20 bg-Custom-Soft-Beige border-1 border-black rounded text-Custom-Deep-Ocean-Blue text-4xl font-bold font-sans ${className} ${hoverClass}`}
    
      onClick={onClick}
      >
        {value}
      </button>
    )
  }

export default Square