import { motion } from 'framer-motion'
import person1 from '../assets/proPic1.png'
import person2 from '../assets/proPic2.png'
import person3 from '../assets/proPic3.png'

const stats = [
  { name: 'Ronald Richards', change: '+43%', color: '#22c55e', img: person1 },
  { name: 'kasdfi nasdm', change: '+43%', color: '#3b82f6', img: person2 },
  { name: 'kasdfi nasdm', change: '+43%', color: '#eab308', img: person3 },
]



function Analytics() {
  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-5xl mx-auto flex items-center gap-16">

        {/* Left — stat cards */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 flex-1"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1B2240] rounded-2xl px-5 py-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <img
                  src={stat.img}
                  alt={stat.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="text-white text-sm font-medium">{stat.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="60" height="30" viewBox="0 0 60 30">
                  <polyline
                    points="0,20 15,15 25,18 35,10 45,12 60,5"
                    fill="none"
                    stroke={stat.color}
                    strokeWidth="2"
                  />
                </svg>
                <span className="text-sm font-medium" style={{ color: stat.color }}>
                  {stat.change}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Right — text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            The robust and highly customizable data analysis tool
          </h2>
          {/* <div className="flex flex-col gap-4">
           
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                </div> */}
                <p className="text-gray-500 text-sm">Using basic skills you can improve your business stuff with Around Using basic skills you can improve your business stuff with Around Using basic skills</p>
              {/* </div>
            
          </div> */}
        </motion.div>

      </div>
    </section>
  )
}

export default Analytics