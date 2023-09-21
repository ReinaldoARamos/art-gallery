import { CaretLeft, CaretRight } from 'phosphor-react'
import React, { useState } from 'react'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Testimonial = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonials.length) % testimonials.length,
    )
  }

  return (
    <div className="w-full bg-zinc-200 py-11 px-72 flex items-center justify-between">
      <button className="bg-arrow rounded-full p-3" onClick={prevTestimonial}>
        <CaretLeft className="h-5 w-5 text-white" />
      </button>
      <div className="flex flex-col px-96">
        <div className="pb-4 bg-none text-Title text-7xl font-sans">´´</div>
        <div className="text-sm text-brown pb-5 bg-none ">
          {testimonials[currentIndex].depoiment}
        </div>
        <div className="text-title text-xl">
          {testimonials[currentIndex].author}
        </div>
      </div>
      <button className="bg-arrow rounded-full p-3" onClick={nextTestimonial}>
        <CaretRight className="h-5 w-5 text-white" />
      </button>
    </div>
  )
}

export default Testimonial
