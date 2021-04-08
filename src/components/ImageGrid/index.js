import { motion, AnimateSharedLayout } from 'framer-motion'
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
      <AnimateSharedLayout type="crossfade">
        {
          images&&images.map(img => (
            <motion.div  layout onClick={() => setSelectedImg(img)} key={img.id} layoutId={img.id} className='grid-image-container'>
              <motion.div
                className='grid-image'
                style={{ backgroundImage: `url(${img.urls.regular})` }}
                alt={img.description}
                initial={{opacity: 0}}
                animate={{opacity: 0.8}}
                transition={{delay: 0.5}} />
            </motion.div>
          ))
        }
      </AnimateSharedLayout>
    </div>
  )
}


export default ImageGrid
