import React, { useState } from 'react'
import '../ImageGrid/ImageGrid.css'
import ImageModal from '../ImageModal'

const ImageGrid = ({ images = [] }) => {

  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <div className='grid-wrapper'>
      {
        selectedImg&&<ImageModal {...{selectedImg, setSelectedImg}} />
      }
      {
        images&&images.map(img => (
          <div onClick={() => setSelectedImg(img)} key={img.id} className='grid-image-container'>
            <div className='grid-image' style={{ backgroundImage: `url(${img.urls.regular})` }} alt={img.description} />
          </div>
        ))
      }
    </div>
  )
}


export default ImageGrid
