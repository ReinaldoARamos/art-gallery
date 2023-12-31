'use client'
// components/ImageSlider.tsx
import React, { useState } from 'react'
import Image from 'next/image'
import { CaretLeft, CaretRight } from 'phosphor-react'
interface ImageSliderProps {
  images: string[]
}

const ImageSliderSm = ({ images }: ImageSliderProps) => {
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
    <div className="lg:flex lg:flex-col lg:justify-center lg:items-center lg:w-full hidden">
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
          width={1234}
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
      <div className=" flex flex-col justify-center items-center pt-6  ">
        <div className="text-3xl text-Title pb-5  ">
          Conexão Concreta: Simpósio Internacional de Arte urbana
        </div>
        <div className="pb-5 text-xl text-brown">
          {' '}
          Praça da República, São Paulo, Brasil
        </div>
        <div className="flex gap-3">
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
    </div>
  )
}

export default ImageSliderSm
