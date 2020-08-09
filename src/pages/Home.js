import React from 'react'
import { Link } from 'react-router-dom'
import logoVideo from '../media/RathboneLogoWave1.m4v'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import InstagramIcon from '@material-ui/icons/Instagram'
import YouTubeIcon from '@material-ui/icons/YouTube'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    padding: theme.spacing(1),
    color: '#ff80b3',
  },
}))

export default function Home() {
  const classes = useStyles()

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
        <Link
          to={{
            pathname: '/music',
            state: {
              transition: 'FromRight',
            },
          }}
        >
          <ArrowLeftIcon
            style={{
              position: 'absolute',
              left: 0,
              bottom: 20,
              fontSize: 60,
              color: '#ff80b3',
              cursor: 'pointer',
            }}
          />
          <div
            className={classes.root}
            style={{
              position: 'absolute',
              left: 40,
              bottom: 29,
            }}
          >
            Music
          </div>
        </Link>

        <div id='socials'>
          <a href='https://www.instagram.com/rathbone_/' target='_blank'>
            <InstagramIcon style={{ fontSize: 30 }} />
          </a>
          <a
            href='https://www.youtube.com/channel/UCq2VjPylnROGkqQjJwX0a1Q'
            target='_blank'
          >
            <YouTubeIcon style={{ fontSize: 40 }} />
          </a>
          <a href='https://rathbone.bandcamp.com/' target='_blank'>
            <img
              src={require('../media/bandcamp.png')}
              height='25px'
              width='25px'
              alt='bandcamp'
            />
          </a>
        </div>

        <Link
          to={{
            pathname: '/videos',
            state: {
              transition: 'FromLeft',
            },
          }}
        >
          <ArrowRightIcon
            style={{
              position: 'absolute',
              right: 0,
              bottom: 20,
              fontSize: 60,
              color: '#ff80b3',
              cursor: 'pointer',
            }}
          />
          <div
            className={classes.root}
            style={{
              position: 'absolute',
              right: 40,
              bottom: 29,
            }}
          >
            Videos
          </div>
        </Link>
      </div>
    </>
  )
}
