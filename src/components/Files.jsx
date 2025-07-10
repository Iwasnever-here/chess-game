import React from 'react'

const Files = ({ files }) => {
  return (
    <div className='files'>
      {files.map(file => <span key={file}>{file}</span>)}
    </div>
  )
}

export default Files
