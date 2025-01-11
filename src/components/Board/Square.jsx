import React from 'react'

function Square({value, onClick}) {
    return (
      <button className='square w-36 h-36 bg-Custom-Soft-Beige border-2 border-black rounded text-Custom-Deep-Ocean-Blue text-8xl font-bold font-sans'
      onClick={onClick}
      >
        {value}
      </button>
    )
  }

export default Square