'use client'
import Image from 'next/image'
import React, { useState } from 'react'

interface ImageContainerProps {
  images: string[]
}

const ImageContainer = ({ images }: ImageContainerProps) => {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    )
  }

  return (
    <div>
      <button onClick={prevImage}>Left Arrow</button>
      <Image
        src={`/images\\${images[currentImage]}`}
        alt={`Image ${currentImage}`}
        width={1324}
        height={340}
        className="bg-cover"
      />
      <button onClick={nextImage}>Right Arrow</button>
    </div>
  )
}

export default ImageContainer
