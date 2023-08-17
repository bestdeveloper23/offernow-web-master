import React from 'react'

class ProgressBar extends React.Component {
  render () {
    const { percent } = this.props
    return(
      <div className='progress-bar'>
        <div
          className={`progress-percent percentage-${percent}`}
        />
      </div>
    )
  }
}

export default ProgressBar;
