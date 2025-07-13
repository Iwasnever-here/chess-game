// Turn.jsx
import React from 'react'

const Turn = ({ turn }) => {
  const playerTurn = turn === 'w' ? 'white' : 'black'

  return (
    <div className='turnBox'>
      It's {playerTurn}'s turn
    </div>
  )
}

export default Turn
