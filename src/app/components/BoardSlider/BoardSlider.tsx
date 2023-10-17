'use client'
// components/ImageSlider.tsx
import React, { useState } from 'react'
import Image from 'next/image'
import { CaretLeft, CaretRight } from 'phosphor-react'
interface ImageSliderProps {
  images: string[]
}

const BoardSlider = ({ images }: ImageSliderProps) => {
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
    <div className="flex flex-col justify-center items-center w-full lg:hidden ">
      <div className="flex  items-center">
        <button
          className=" md:block -mr-4 z-30  bg-arrow p-3 text-white rounded-full  "
          onClick={prevImage}
        >
          <CaretLeft className="h-6 w-6" />
        </button>

        <Image
          src={`/images\\${images[currentImage]}`}
          alt={`Image ${currentImage}`}
          width={540}
          height={340}
          className="object-cover"
        />
        <button
          className=" md:block -ml-4 z-30  bg-arrow p-3 text-white rounded-full  "
          onClick={nextImage}
        >
          <CaretRight className="h-6 w-6" />
        </button>
      </div>

      <div className="flex gap-3 pt-3">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full   ${
              index === currentImage
                ? 'bg-arrow w-12 transition-all duration-300'
                : 'bg-gray transition-all duration-300 '
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default BoardSlider
