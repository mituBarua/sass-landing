import { useState } from 'react'
import { motion } from 'framer-motion'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full absolute top-0 left-0 z-50 px-8 py-5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-black font-bold text-sm">N</span>
          </div>
          <span className="text-white font-semibold text-lg italic">NftX</span>
        </div>

        {/* Nav links - center */}
        <div className="hidden md:flex items-center gap-8">
          {['Home', 'Feature', 'Who to work', 'Pricing', 'Reviews'].map((item) => (
            <a
              key={item}
              href="#"
              className={`text-sm transition-colors ${
                item === 'Home' ? 'text-white font-medium' : 'text-gray-400 hover:text-white'
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-medium"
        >
          Start free 14 trial →
        </motion.button>

        {/* Mobile */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0D1117] p-6 flex flex-col gap-4 mt-2">
          {['Home', 'Feature', 'Who to work', 'Pricing', 'Reviews'].map((item) => (
            <a key={item} href="#" className="text-gray-400 hover:text-white text-sm">{item}</a>
          ))}
          <button className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-medium">
            Start free 14 trial →
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar