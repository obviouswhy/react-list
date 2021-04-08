import React from 'react'
import './ImageModal.css'


const ImageModal = ({ selectedImg, setSelectedImg }) => {
  return (
    <div className='modal-wrapper'>
      <div onClick={() => setSelectedImg(null)} className='backdrop' >
        <img src={selectedImg.urls.regular} alt={`enlarged-${selectedImg.description}`} onClick={e => e.stopPropagation()} />
      </div>
    </div>
  )
}

export default ImageModal
