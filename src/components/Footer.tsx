import { motion } from 'framer-motion'

const exploreLinks = ['Explore', 'Feature', 'Who to work', 'Pricing', 'Reviews']
const legalLinks = ['Privacy policy', 'Legal', 'Terms of service', 'Help center']

function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 px-8 border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-4 gap-8 mb-12">

          {/* Logo + description */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#1B2240] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="font-bold text-gray-900 italic text-lg">NftX</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Nulla facilisi. Vestibulum non est nisl. Donec eget sodales nisl. Donec ut velit erat.
            </p>
            <p className="text-gray-400 text-xs">© 2022 All rights reserved.</p>
          </div>

          {/* Explore links */}
          <div>
            <div className="flex flex-col gap-3">
              {exploreLinks.map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  whileHover={{ x: 4 }}
                  className="text-gray-500 text-sm hover:text-gray-900 transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Legal links */}
          <div>
            <div className="flex flex-col gap-3">
              {legalLinks.map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  whileHover={{ x: 4 }}
                  className="text-gray-500 text-sm hover:text-gray-900 transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div>
            <p className="font-semibold text-gray-900 mb-4 text-sm">Social Media</p>
            <div className="flex gap-3">
              {/* Instagram */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="#374151"/>
                </svg>
              </motion.a>

              {/* Facebook */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#374151">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </motion.a>

              {/* YouTube */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#374151">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
                </svg>
              </motion.a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer