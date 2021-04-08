import React from 'react'
import '../LandingPage/LandingPage.css'

const LandingPage = ({ images, onBtnClick }) => {
  return (
    <div className='landing-wrapper'>
      <button onClick={onBtnClick}>Load Images!</button>
      <h1 style={{textAlign: 'center'}}>{images.length}</h1>
    </div>
  )
}

export default LandingPage
