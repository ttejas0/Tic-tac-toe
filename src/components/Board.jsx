import React from 'react'
import './Styles/Board.css'

function Board() {
  return (
    <>
        <section className='Tic-Tac-Toe-Board '>
            <div className='tile'>1</div>
            <div className='tile'>2</div>
            <div className='tile'>3</div>
            <div className='tile'>4</div>
            <div className='tile'>5</div>
            <div className='tile'>6</div>
            <div className='tile'>7</div>
            <div className='tile'>8</div>
            <div className='tile'>9</div>
        </section>
    </>
  )
}

export default Board