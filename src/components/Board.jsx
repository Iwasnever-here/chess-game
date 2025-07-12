import React from 'react'
import Ranks from './Ranks'
import Files from './Files'
import Pieces from './Pieces'

const Board = () => {

    const getClassName = (i,j) => {
        let x = ''
        x += (i+j) % 2 === 0 ? 'dark-tile' : 'light-tile'
        //console.log(x)
        return x
    }

    const ranks =Array(8).fill().map((x,i) => 8-i)
     const files =Array(8).fill().map((x,i) => i+1)
  return (
    <div className='board'>

        <Ranks ranks = {ranks} />

        <div className='tiles'>
            {ranks.map((rank, i) => 
            files.map((file, j) => 
            <div key = {file+'-'+rank} className={getClassName(9-i,j)}>
            
                </div>))}

            

        </div>
        <Pieces />

        <Files files = {files} />
        
      
    </div>
  )
}

export default Board
