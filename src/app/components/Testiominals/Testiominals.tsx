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
    <div className="w-full bg-zinc-200 py-11 lg:px-72 px-6 flex items-center flex-col lg:flex-row lg:justify-between">
      <button
        className="bg-arrow rounded-full p-3 hidden lg:block"
        onClick={prevTestimonial}
      >
        <CaretLeft className="h-5 w-5 text-white" />
      </button>
      <div className="flex flex-col px-96">
        <div className="pb-4 bg-none text-Title text-7xl font-sans hidden lg:block">
          ´´
        </div>
        <div className="text-sm text-brown lg:pb-5 pb-16 bg-none text-justify w-80">
          {testimonials[currentIndex].depoiment}
        </div>
        <div className="text-title text-xl pb-10">
          {testimonials[currentIndex].author}
        </div>
      </div>
      <button
        className="bg-arrow rounded-full p-3  hidden lg:block"
        onClick={nextTestimonial}
      >
        <CaretRight className="h-5 w-5 text-white" />
      </button>
      <div className="flex gap-20  lg:hidden">
        {' '}
        <button
          className="bg-arrow rounded-full p-3 "
          onClick={prevTestimonial}
        >
          <CaretLeft className="h-5 w-5 text-white" />
        </button>
        <button
          className="bg-arrow rounded-full p-3  lg:hidden"
          onClick={nextTestimonial}
        >
          <CaretRight className="h-5 w-5 text-white" />
        </button>
      </div>
    </div>
  )
}

export default Testimonial
