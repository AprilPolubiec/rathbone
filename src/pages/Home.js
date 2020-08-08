import React from 'react'
import { Link } from 'react-router-dom'
import logoVideo from '../media/RathboneLogoWave1.m4v'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import Music from './Music'

export default function Home() {
  const redirectToVideos = () => {}

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
      </div>
      <Link to='/music'>
        <ArrowLeftIcon
          color='primary'
          style={{
            position: 'absolute',
            left: 0,
            bottom: 0,
            fontSize: 60,
            cursor: 'pointer',
          }}
        />
      </Link>
      <Link to='/videos'>
        <ArrowRightIcon
          onClick={redirectToVideos}
          color='primary'
          style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            fontSize: 60,
            cursor: 'pointer',
          }}
        />
      </Link>
    </>
  )
}
