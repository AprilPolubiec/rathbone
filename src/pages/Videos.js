import React, { useState, useEffect } from 'react'
import YouTube from 'react-youtube'
import { makeStyles } from '@material-ui/core/styles'
import BottomNav from '../components/BottomNav'
require('dotenv').config()

const CHANNEL_ID = 'UCq2VjPylnROGkqQjJwX0a1Q'
const PLAYLIST_ID = 'PLLTY4xWe77mo0dUBjLoQFVpQaIATaufbY'
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
      <BottomNav />
    </div>
  )
}
