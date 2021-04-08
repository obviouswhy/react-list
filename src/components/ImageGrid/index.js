import React, { useState } from 'react'
import '../ImageGrid/ImageGrid.css'


const ImageGrid = ({ images = [] }) => {
  return (
    <div className='grid-wrapper'>
      {
        images&&images.map(img => (
          <div key={img.id} className='grid-image-container'>
            <div className='grid-image' style={{ backgroundImage: `url(${img.urls.regular})` }} alt={img.description} />
          </div>
        ))
      }

    </div>
  )
}


export default ImageGrid
