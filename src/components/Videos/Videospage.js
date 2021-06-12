import React, { useState, useEffect } from 'react'
import firebase from '../../firebase'
import Navbarpages from '../Navbar/Navbarpages'

const Videospage = () => {
  const [videopage, setvideopage] = useState([])

  const ref = firebase.firestore().collection('videos')

  function getvideopage() {
    ref.onSnapshot((querySnapshot) => {
      const items = []
      querySnapshot.forEach((doc) => {
        items.push(doc.data())
      })
      setvideopage(items)
    })
  }

  useEffect(() => {
    getvideopage()
  }, [])

  let width = 350

  return (
    <>
      <Navbarpages />
      <div className='header'>
        <div className=' container'>
          <div className='page-header'>
            <h1>Videos</h1>
            <p>
              Curated videos on <br /> Electric Vehicles for your better
              understandings.
            </p>
          </div>
          <div className='videopage'>
            {videopage.map((item) => {
              return (
                <div key={item.id}>
                  <iframe
                    width={width}
                    height='280'
                    src={item.url}
                    title='YouTube video player'
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                  ></iframe>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Videospage
