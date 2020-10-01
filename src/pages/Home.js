import React from 'react'
import logoVideo from '../media/RathboneLogoWave1.m4v'

import BottomNav from '../components/BottomNav'

export default function Home() {
  return (
    <>
      <div className='wrapper'>
        <video
          className='video'
          src={logoVideo}
          autoPlay={true}
          loop={true}
          playsInline
          muted
        ></video>
        <BottomNav />
      </div>
    </>
  )
}
