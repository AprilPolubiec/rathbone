import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import logoVideo from '../media/RathboneLogoWave1.m4v'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import Music from './Music'

export default function Home() {
  const history = useHistory()
  const redirectToMusic = () => {
    document.getElementsByClassName('video')[0].classList.toggle('slide-right')
    setTimeout(() => {
      history.push('music')
    }, 1000)
  }

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
      <ArrowLeftIcon
        onClick={redirectToMusic}
        color='primary'
        style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          fontSize: 60,
          cursor: 'pointer',
        }}
      />
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
    </>
  )
}
