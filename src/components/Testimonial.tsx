import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import leslie from '../assets/testimonial.png'

const testimonials = [
  {
    name: 'Leslie Alexander',
    role: 'CEO, Digital PT',
    image: leslie,
    text1: 'Nulla facilisi. Vestibulum non est nisl. Donec eget sodales nisl. Donec ut velit erat. Etiam non erat volutpat, consectetur nunc vitae, posuere diam.',
    text2: 'Sed nisl nisi, rhoncus nec orci at, convallis ullamcorper purus. Suspendisse placerat tortor vitae neque iaculis efficitur. Nulla sed consectetur mi, nec tempor lorem. Aenean nec aliquet leo.',
  },
  {
    name: 'John Smith',
    role: 'CTO, TechCorp',
    image: leslie,
    text1: 'Nulla facilisi. Vestibulum non est nisl. Donec eget sodales nisl. Donec ut velit erat. Etiam non erat volutpat, consectetur nunc vitae, posuere diam.',
    text2: 'Sed nisl nisi, rhoncus nec orci at, convallis ullamcorper purus. Suspendisse placerat tortor vitae neque iaculis efficitur. Nulla sed consectetur mi, nec tempor lorem.',
  },
  {
    name: 'Sara Johnson',
    role: 'Designer, Creative Co',
    image: leslie,
    text1: 'Nulla facilisi. Vestibulum non est nisl. Donec eget sodales nisl. Donec ut velit erat. Etiam non erat volutpat.',
    text2: 'Sed nisl nisi, rhoncus nec orci at, convallis ullamcorper purus. Suspendisse placerat tortor vitae neque iaculis efficitur.',
  },
]

function Testimonial() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent(current === 0 ? testimonials.length - 1 : current - 1)
  const next = () => setCurrent(current === testimonials.length - 1 ? 0 : current + 1)
  useEffect(() => {
  const timer = setInterval(() => {
    setCurrent((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    )
  }, 3000)

  return () => clearInterval(timer)
}, [])

  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Testimonial
          </h2>
          <p className="text-gray-400 text-sm">
            Using basic skills you can improve your business stuff with Around
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative flex items-center gap-4">

          {/* Prev button */}
          <button
            onClick={prev}
            className="bg-[#F0F9FF] w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center flex-shrink-0 hover:bg-gray-50 transition-colors"
          >
            ←
          </button>

          {/* Card */}
         <div className="flex-1 overflow-hidden" style={{ height: '280px' }}>
  <AnimatePresence mode="wait">
    <motion.div
      key={current}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="bg-[#F0F9FF] rounded-2xl p-8 flex gap-8 h-full"
    >
                {/* Image */}
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-48 h-48 object-cover rounded-xl flex-shrink-0"
                />

                {/* Content */}
                <div className="flex flex-col justify-center gap-3">
                  <p className="font-bold text-gray-900 text-lg">
                    {testimonials[current].name}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {testimonials[current].role}
                  </p>
                  <div className="h-px bg-gray-200 my-1"></div>
                  <p className="text-gray-600 text-sm italic leading-relaxed">
                    {testimonials[current].text1}
                  </p>
                  <p className="text-gray-600 text-sm italic leading-relaxed">
                    {testimonials[current].text2}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next button */}
          <button
            onClick={next}
            className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 hover:bg-blue-600 transition-colors"
          >
            →
          </button>

        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all ${
                i === current ? 'w-4 h-2 bg-blue-500' : 'w-2 h-2 bg-gray-300'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonial