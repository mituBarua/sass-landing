import { motion } from 'framer-motion'
import chart1 from '../assets/graph1.png'
import chart2 from '../assets/graph2.png'
import chart3 from '../assets/graph3.png'

const points = [
  'Using basic skills you can improve your business',
  'Using basic skills you can improve your business',
  'Using basic skills you can improve your business',
  'Using basic skills you can improve your business',
  'Using basic skills you can improve your business',
]

function Analysis() {
  return (
    <section className="bg-[#293241] py-20 px-8">
     <div className="max-w-5xl mx-auto flex items-center gap-16 ">
        {/* Left — text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          {/* Badge */}
          <div className="inline-block bg-yellow-400 text-black text-xs font-medium px-3 py-1 rounded-full mb-4">
            Analytics
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
            Analyze our data in a few clicks without too many stteings
          </h2>

          <div className="flex flex-col gap-4">
            {points.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <div className="w-5 h-5 rounded-full border-2 border-yellow-400 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                </div>
                <p className="text-gray-400 text-sm">{point}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      {/* Right — chart cards */}
<motion.div
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="flex-1 flex flex-col gap-4"
>
  {/* Top two charts */}
  <div className="flex gap-4">
    <div className="bg-white rounded-2xl p-4 flex-1 flex items-center justify-center">
      <img src={chart1} alt="Donut chart" className="w-full object-contain" />
    </div>
    <div className="bg-white rounded-2xl p-4 flex-1 flex items-center justify-center">
      <img src={chart2} alt="Bar chart" className="w-full object-contain" />
    </div>
  </div>

  {/* Bottom earning chart — smaller */}
  <div className="bg-white rounded-2xl p-4 w-1/2 mx-auto">
    <img src={chart3} alt="Earning chart" className="w-full object-contain" />
  </div>
</motion.div>

      </div>
    </section>
  )
}

export default Analysis