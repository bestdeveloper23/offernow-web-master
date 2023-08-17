import React from 'react'

import { Link } from 'react-router-dom'
import { ProgressBar } from '../../components'


const Confirmation = (props) => (
  <div className='page-container'>
    <ProgressBar percent='100' />
    <div className='form-container'>
      <div className='form-wrapper'>

        <div className='form-left'>
        </div>

        <div className='form-right'>
          <div className='input-container'>
            <div className='input-col confirmation'>
              <h1>Great! We have all the important information to send your offer</h1>
              <Link to='/' className='go-home'>Back to home page</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
)

export default Confirmation
