import { motion } from 'framer-motion'
import dashboard2 from '../assets/dashboard2.png'

function Feature() {
  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#1B2240] rounded-3xl flex items-center gap-0 overflow-hidden"
          style={{ minHeight: '380px' }}
        >
          {/* Left text */}
          <div className="flex-1 p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              The best flows on the planet, at your fingertips.
            </h2>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
              Nulla facilisi. Vestibulum non est nisl. Donec eget sodales nisl. Donec ut velit erat.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white text-white px-6 py-3 rounded-xl text-sm font-medium flex items-center gap-2"
            >
              Start free 14 trial →
            </motion.button>
          </div>

          {/* Right image */}
          <div className="flex-1 flex items-end justify-end h-full pt-8">
            <img
              src={dashboard2}
              alt="Dashboard preview"
              className="w-full rounded-tl-2xl"
              style={{ marginBottom: '-4px' }}
            />
          </div>

        </motion.div>
      </div>
    </section>
  )
}

export default Feature