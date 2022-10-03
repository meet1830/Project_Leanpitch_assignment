import React from 'react'
import Conference from '../Header/Modals/Conference'
import ButtonsTime from '../Util/ButtonsTime'
import './MainConference.css'

export default function MainConference() {
  return (
    <div className='main-conference'>
        <h1 className='main-h1'>Our Conference</h1>
        <ButtonsTime color1='white' color2='black'/>
        <Conference size='1.2rem'/>
    </div>
  )
}
