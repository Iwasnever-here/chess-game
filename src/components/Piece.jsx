import React from 'react'

const Piece = ({rank, file, piece}) => {
    console.log(piece)
  return (
    <div className={`piece ${piece} p-${file}${rank}`} draggable={true}/>
      
  )
}

export default Piece
