import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft'

import { makeStyles } from '@material-ui/core/styles'

import { db } from '../firebase'

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    padding: theme.spacing(1),
    color: '#ff80b3',
  },
}))

export default function Music() {
  const classes = useStyles()

  const [albums, setAlbums] = useState([])
  useEffect(() => {
    db.collection('albums')
      .orderBy('date')
      .get()
      .then((collectionRef) => {
        var fetchedAlbums = []
        collectionRef.docs.forEach((doc) => {
          fetchedAlbums.push({
            title: doc.id,
            url: doc.data().url,
            id: doc.data().id,
          })
        })
        setAlbums(fetchedAlbums)
      })
  }, [])

  return (
    <div className='wrapper'>
      <div id='music-container'>
        {albums.map((item, index) => {
          return (
            <>
              <div className='music-item'>
                <div className={`iframe-placeholder ${index}`}>
                  <img
                    src={require(`../media/${item.id}.jpg`)}
                    height='300px'
                    width='300px'
                    alt='placeholder'
                  />
                </div>
                <iframe
                  src={`https://bandcamp.com/EmbeddedPlayer/album=${item.id}/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/`}
                  seamless
                  title={item.title}
                  onLoad={() => {
                    document.getElementsByClassName(
                      `iframe-placeholder ${index}`
                    )[0].style.display = 'none'
                  }}
                >
                  <a href={item.url}>{item.title}</a>
                </iframe>
              </div>
            </>
          )
        })}
      </div>
      <Link
        to={{
          pathname: '/',
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
          Home
        </div>
      </Link>
      <Link
        to={{
          pathname: '/videos',
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
          Videos
        </div>
      </Link>
    </div>
  )
}
