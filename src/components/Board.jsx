import React from 'react'
import Ranks from './Ranks'
import Files from './Files'

const Board = () => {

    const getClassName = (i,j) => {
        let x = ''
        x += (i+j) % 2 === 0 ? 'light-tile' : 'dark-tile'
        console.log(x)
        return x
    }

    const ranks =Array(8).fill().map((x,i) => 8-i)
     const files =Array(8).fill().map((x,i) => String.fromCharCode(i+97))
  return (
    <div className='board'>

        <Ranks ranks = {ranks} />

        <div className='tiles'>
            {ranks.map((rank, i) => 
            files.map((file, j) => 
            <div key = {file+'-'+rank} className={getClassName(i,j)}>
            
                </div>))}

        </div>

        <Files files = {files} />
      
    </div>
  )
}

export default Board
