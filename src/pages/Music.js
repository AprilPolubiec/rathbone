import React, { useState, useEffect } from 'react'
import { db } from '../firebase'

export default function Music() {
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
  }, [albums])

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
                    alt="placeholder"
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
    </div>
  )
}
