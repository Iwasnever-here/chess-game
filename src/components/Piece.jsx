import React from 'react'

const Piece = ({rank, file, piece, turn}) => {
    
  const onDragStart = (e) => {
    const pieceColor = piece[0]
    if(pieceColor !== turn) {
      e.prevenDefault();
      return;
    }
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('text/plain',`${piece}, ${rank}, ${file}` )
    setTimeout(() => {
      e.target.style.display = 'none'
    }, 0)
    
    
  }

  const onDragEnd = (e) => e.target.style.display = 'block'

  return (
    <div className={`piece ${piece} p-${file}${rank}`}
     draggable={true}
     onDragStart={onDragStart}
     onDragEnd={onDragEnd}/>
      
  )
}

export default Piece