import React, { useEffect, useState } from 'react'
import './ImageModal.css'


const ImageModal = ({setSelectedImg, images, selectedIndex }) => {

  const [imgIndex, setImgIndex] = useState(selectedIndex)
  const [img, setImg] = useState(images[imgIndex])

  const handleKeyDown = e => {
    const { key } = e
    switch (key) {
      case 'ArrowRight':
        setImgIndex(prevState => (prevState + 1) < images.length? prevState + 1 : prevState )
        break;
      case 'ArrowLeft':
        setImgIndex(prevState => (prevState - 1) >= 0? prevState - 1 : prevState )
        break;
      case 'Escape':
        setSelectedImg(null)
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown]);

  useEffect(() => {
    setImg(images[imgIndex])
  }, [imgIndex]);

  return (
    <div className='modal-wrapper'>
      <div onClick={() => setSelectedImg(null)} className='backdrop' >
        <img src={img.urls.regular} alt={`enlarged-${img.description}`} onClick={e => e.stopPropagation()} />
      </div>
    </div>
  )
}

export default ImageModal
