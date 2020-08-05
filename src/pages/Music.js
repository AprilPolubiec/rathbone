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
  })

  return (
    <div className='wrapper'>
      <div id='music-container'>
        {albums.map((item, index) => {
          return (
            <div id='placeholder'>
              <iframe
                src={`https://bandcamp.com/EmbeddedPlayer/album=${item.id}/size=large/bgcol=333333/linkcol=0f91ff/minimal=true/transparent=true/`}
                seamless
              >
                <a href={item.url}>{item.title}</a>
              </iframe>
            </div>
          )
        })}
      </div>
    </div>
  )
}
