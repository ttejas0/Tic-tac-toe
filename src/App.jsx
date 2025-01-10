import { useState } from 'react'
import Reset from './components/Reset'
import ScoreBoard from './components/ScoreBoard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <><div className='min-h-screen flex flex-col items-center justify-center'>
        <ScoreBoard/>
        <Reset/>
    </div>
    </>
  )
}

export default App
