import React, { useState, useEffect } from 'react'
import YouTube from 'react-youtube'
import { Link } from 'react-router-dom'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft'
import { makeStyles } from '@material-ui/core/styles'

require('dotenv').config()

const CHANNEL_ID = 'UCq2VjPylnROGkqQjJwX0a1Q'
const PLAYLIST_ID = 'PLLTY4xWe77mr6Y9FpOGRlNN3Ei5NZJs6W'
const MAX_RESULT = 50

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    padding: theme.spacing(1),
    color: '#ff80b3',
  },
}))

export default function Videos() {
  const classes = useStyles()

  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch(
      `
      https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${PLAYLIST_ID}&maxResults=${MAX_RESULT}&part=snippet%2CcontentDetails&key=${process.env.REACT_APP_GOOGLE_API}
      `
    )
      .then((response) => response.json())
      .then((json) => {
        if (json.error) {
          console.log('youtube_fetch_error')
        } else {
          console.log(json['items'])
          setVideos(json['items'])
        }
      })
  }, [])

  return (
    <div className='wrapper'>
      <div id='video-container'>
        {videos.map((item, index) => {
          return (
            <>
              <YouTube
                videoId={item.contentDetails.videoId}
                className={`video`}
                opts={{
                  playerVars: {
                    modestbranding: 1,
                    rel: 0,
                  },
                }}
              />
            </>
          )
        })}
      </div>
      <Link
        to={{
          pathname: '/',
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
          Home
        </div>
      </Link>
      <Link
        to={{
          pathname: '/music',
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
          Music
        </div>
      </Link>
    </div>
  )
}
