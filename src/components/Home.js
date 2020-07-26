import React from 'react'
import logoVideo from '../media/RathboneLogoWave1.m4v'

export default function Home() {
  return (
    <>
      <div className='bg-image'>
        <video src={logoVideo} autoPlay={true} loop={true}></video>
      </div>
    </>
  )
}
