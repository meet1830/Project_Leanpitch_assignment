import React from 'react'

export default function Podcasts({podcastsRef}) {
  return (
    <div ref={podcastsRef} id='podcasts' style={{height: '100%'}}>
      <h1 className='main-h1'>Podcasts</h1>
    </div>
  )
}
