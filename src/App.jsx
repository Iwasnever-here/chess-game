import { useState } from 'react'

import './index.css'
import Board from './components/Board'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className = 'app'>
      <Board />
    </div>
  )
}

export default App
