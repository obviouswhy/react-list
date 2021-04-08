import React from 'react'
import '../LandingPage/LandingPage.css'

const LandingPage = ({ onBtnClick }) => {
  return (
    <div className='landing-wrapper'>
      <button onClick={onBtnClick}>Load Images!</button>
    </div>
  )
}

export default LandingPage
