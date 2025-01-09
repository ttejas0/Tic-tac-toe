import { useState } from 'react'
import Board from './components/Board'
import ScoreBoard from './components/ScoreBoard'
import Reset from './components/Reset'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ScoreBoard/>
      <Board/>
      <Reset/>
    </>
  )
}

export default App
