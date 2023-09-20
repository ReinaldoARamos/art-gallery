'use client'
// components/ImageSlider.tsx
import React, { useState } from 'react'
import Image from 'next/image'
interface ImageSliderProps {
  images: string[]
}

const ImageSlider = ({ images }: ImageSliderProps) => {
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
    <div className="relative w-full overflow-hidden">
      <button
        className="hidden md:block absolute top-1/2 left-2 transform -translate-y-1/2 z-10"
        onClick={prevImage}
      >
        &lt;
      </button>
      <button
        className="hidden md:block absolute top-1/2 right-2 transform -translate-y-1/2 z-10"
        onClick={nextImage}
      >
        &gt;
      </button>
      <Image
        src={`/images\\${images[currentImage]}`}
        alt={`Image ${currentImage}`}
        width={1324}
        height={340}
        className="object-cover"
      />

      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentImage ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageSlider
/*
  <Image
        src={`/images\\${images[currentImage]}`}
        alt={`Image ${currentImage}`}
        width={1324}
        height={340}
        className="object-cover"
      />
* */
