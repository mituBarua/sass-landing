import { motion } from 'framer-motion'

const steps = [
  {
    number: '1.',
    title: 'Target your audience effectively',
    desc: 'Using basic skills you can improve your business stuff with Around Using basic skills you can.',
  },
  {
    number: '2.',
    title: 'Build dashboard in minutes',
    desc: 'Using basic skills you can improve your business stuff with Around Using basic skills you can.',
  },
  {
    number: '3.',
    title: 'Easily download your tables and data',
    desc: 'Using basic skills you can improve your business stuff with Around Using basic skills you can.',
  },
  {
    number: '4.',
    title: 'Access to dashboard from all devices',
    desc: 'Using basic skills you can improve your business stuff with Around Using basic skills you can.',
  },
]

function HowItWorks() {
  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Does It Work?
          </h2>
          <p className="text-gray-400 text-sm">
            Using basic skills you can improve your business stuff with Around
          </p>
        </motion.div>

       
        <div className="relative">

       
       
<div className="absolute top-8 left-0 right-0 h-px bg-gray-200 z-0 hidden md:block"></div>

          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#1B2240] rounded-2xl p-5 flex flex-col gap-3"
              >
                <p className="text-white font-bold text-sm leading-snug">
                  {step.number} {step.title}
                </p>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default HowItWorks