import React from 'react'
import Event from '../../Util/Event'
import './Styles/PmSpeaksSeries.css'

export default function PmSpeaksSeries({refPmSpeakSeries}) {
  return (
    <div className='pmSpeaks' ref={refPmSpeakSeries} id='pmSpeaksSeries'>
      <Event/>
      <Event/>
      <Event/>
      <Event/>
    </div>  
  )
}
