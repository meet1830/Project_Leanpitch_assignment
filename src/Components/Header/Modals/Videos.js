import React from 'react'
import Event from '../../Util/Event'
import './Styles/Videos.css'

export default function Videos({videosRef}) {
  return (
    <div className='videos' ref={videosRef} id='videos'>
      <Event/>
      <Event/>
    </div>
  )
}
