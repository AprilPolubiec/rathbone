import React from 'react'
import logoVideo from '../media/RathboneLogoWave1.m4v'

export default function Home() {
  return (
    <>
      <video
        src={logoVideo}
        autoPlay={true}
        loop={true}
        playsInline
        muted
      ></video>
    </>
  )
}
