import { motion } from 'framer-motion'

const reviews = [
  { name: 'Google', stars: 5 },
  { name: 'Amazon', stars: 5 },
  { name: 'Spotify', stars: 4 },
]

function Reviews() {
  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-16"
        >
          Customers have consistently <br /> rated Around 4.7/5 stars
        </motion.h2>

        <div className="grid grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-4"
            >
              <div className="flex gap-1">
                {Array.from({ length: review.stars }).map((_, j) => (
                  <span key={j} className="text-yellow-400 text-xl">★</span>
                ))}
                {Array.from({ length: 5 - review.stars }).map((_, j) => (
                  <span key={j} className="text-gray-300 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-500 text-sm text-center">
                Maecenas convallis non sapien in commodo. <br />
                Nulla semper pulvinar luctus. Proin luctus.
              </p>
              <p className="text-gray-400 font-semibold text-lg">{review.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews