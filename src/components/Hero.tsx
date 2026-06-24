import { useState } from 'react'
import { motion } from 'framer-motion'
import heroImage from '../assets/dashboard.png';
function Hero() {
  const [email, setEmail] = useState('')

  return (
    <>
      {/* Dark section */}
      <section className="bg-[#0D1117] flex flex-col items-center justify-start pt-32 px-8 relative">

        {/* Background diagonal lines */}
        <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-gray-600 to-transparent rotate-12 origin-top"></div>
          <div className="absolute top-0 left-2/4 w-0.5 h-full bg-gradient-to-b from-transparent via-gray-600 to-transparent rotate-12 origin-top"></div>
          <div className="absolute top-0 left-3/4 w-0.5 h-full bg-gradient-to-b from-transparent via-gray-600 to-transparent rotate-12 origin-top"></div>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-400 text-sm mb-4 z-10"
        >
          Using basic skills you can improve your business stuff with Around
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white text-5xl md:text-6xl font-bold text-center max-w-3xl leading-tight mb-10 z-10"
        >
          One Dashboard to Manage all Your businesses
        </motion.h1>

        {/* Email input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center bg-[#1A2035] border border-gray-700 rounded-full p-1 w-full max-w-lg mb-16 z-10"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Input your mail..."
            className="flex-1 bg-transparent text-gray-300 text-sm px-4 outline-none placeholder-gray-500"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black text-sm font-semibold px-6 py-2.5 rounded-full"
          >
            Try for Free
          </motion.button>
        </motion.div>

        {/* Dashboard screenshot — sits inside dark section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full max-w-5xl z-10 relative -mb-36"
        >
          <img
            src={heroImage}
            alt="NftX Dashboard"
            className="w-full rounded-2xl shadow-2xl border border-gray-800"
          />
        </motion.div>

      </section>

      {/* White section — dashboard overlaps into here */}
      <div className="bg-white pt-40 pb-0"></div>
    </>
  )
}

export default Hero