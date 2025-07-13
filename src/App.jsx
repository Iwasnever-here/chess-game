import { useState } from 'react'

import './index.css'
import Board from './components/Board'
import Turn from './components/Turn'

function App() {
  const [count, setCount] = useState(0)
  const [turn, setTurn] = useState('w')

  return (
    <div className = 'app'>
      <Turn turn = {turn} />
      <Board turn = {turn} setTurn = {setTurn}/>
    </div>
  )
}

export default App