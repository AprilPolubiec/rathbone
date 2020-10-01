import React, { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles'

import { db } from '../firebase'
import BottomNav from '../components/BottomNav'

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
      .orderBy('date', 'desc')
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
      <BottomNav />
    </div>
  )
}
