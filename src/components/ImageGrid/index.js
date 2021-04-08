import { motion } from 'framer-motion'
import React, { useState } from 'react'
import '../ImageGrid/ImageGrid.css'
import ImageModal from '../ImageModal'

const ImageGrid = ({ images = [] }) => {

  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <div className='grid-wrapper'>
      {
        selectedImg&&<ImageModal {...{setSelectedImg, images}} selectedIndex={images.indexOf(selectedImg)} />
      }
      {
        images&&images.map(img => (
          <motion.div  layout onClick={() => setSelectedImg(img)} key={img.id} className='grid-image-container'>
            <div className='grid-image' style={{ backgroundImage: `url(${img.urls.regular})` }} alt={img.description} />
          </motion.div>
        ))
      }
    </div>
  )
}


export default ImageGrid
