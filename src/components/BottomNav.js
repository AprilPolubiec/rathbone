import React from 'react'
import { Link, useLocation } from 'react-router-dom'
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

export default function BottomNav() {
  const classes = useStyles()
  const { pathname } = useLocation()
  console.log(pathname)

  const LeftArrow = ({ destination }) => {
    return (
      <Link
        to={{
          pathname: `/${destination === 'home' ? '' : destination}`,
          state: {
            transition: 'FromRight',
          },
        }}
      >
        <ArrowLeftIcon
          style={{
            fontSize: 40,
            color: '#ff80b3',
            cursor: 'pointer',
            marginRight: "-15px"
          }}
        />
        <div className={classes.root}>{destination}</div>
      </Link>
    )
  }

  const RightArrow = ({ destination }) => {
    return (
      <Link
        to={{
          pathname: `/${destination === 'home' ? '' : destination}`,
          state: {
            transition: 'FromLeft',
          },
        }}
      >
        <div className={classes.root}>{destination}</div>
        <ArrowRightIcon
          style={{
            fontSize: 40,
            color: '#ff80b3',
            cursor: 'pointer',
            marginLeft: "-15px"
          }}
        />
      </Link>
    )
  }

  switch (pathname) {
    case '/':
      return (
        <div id='bottom-nav'>
          <LeftArrow destination='music' />
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
          <RightArrow destination='videos' />
        </div>
      )
    case '/music':
      return (
        <div id='bottom-nav'>
          <LeftArrow destination='videos' />
          <RightArrow destination='home' />
        </div>
      )
    case '/videos':
      return (
        <div id='bottom-nav'>
          <LeftArrow destination='home' />
          <RightArrow destination='music' />
        </div>
      )
    default:
      return <></>
  }
}
