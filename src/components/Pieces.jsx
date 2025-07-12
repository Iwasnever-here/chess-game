import Piece from './Piece'
import {useState, useRef} from 'react'
import { createPosition, copyPosition } from './helper'

const Pieces = () => {

    const ref = useRef()

    const [state,setState] = useState(createPosition())

    const calculateCoord = (e) => {
      const {width,left,top} = ref.current.getBoundingClientRect()
      const size = width/8
      const y = Math.floor((e.clientX - left)/size)
      const x = 7- Math.floor((e.clientY - top)/size)
      return{x,y}
    }

    const onDrop = (e) => {
      const newPosition = copyPosition(state)
      const {x,y} = calculateCoord(e)
      const [p, rankStr, fileStr] = e.dataTransfer.getData('text').split(',')

      const rank = parseInt(rankStr)
      const file = parseInt(fileStr)

      newPosition[rank][file] = ''
      newPosition[x][y] = p

      setState(newPosition)
    }

    const onDragOver = (e) => e.preventDefault()

  return (
    <div className='pieces' onDrop = {onDrop} onDragOver = {onDragOver} ref = {ref} >
      {state.map((r, rank) =>
    r.map((f,file) =>
    state[rank][file] ?
    <Piece 
        key = {rank + '-' + file}
        rank = {rank}
        file = {file}
        piece = {state[rank][file]}
    /> :
    null))}
    </div>
  )
}

export default Pieces
