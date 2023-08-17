import React from 'react'

const Spinner = (props) => {
  const { dimensions, marg, content, col } = props

  return (
    <div className='spinner-container'>
      {content &&
        <div className='spinner-content'>{content && content}</div>
      }

      <div
        className='spinner'
        style={{
          height: dimensions ? dimensions : '30px',
          width: dimensions ? dimensions : '30px',
          margin: marg ? marg : 'auto',
          display: 'block',
          color: col ? col : 'blue'
        }}
      />
  </div>
  )
}

export default Spinner
