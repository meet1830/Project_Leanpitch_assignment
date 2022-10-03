import React from 'react'

export default function BeASpeaker({beASpeakerRef}) {
  return (
    <div ref={beASpeakerRef} id='beASpeaker' style={{height: '100%'}}>
      <h1 className='main-h1'>Be A Speaker</h1>
    </div>
  )
}
