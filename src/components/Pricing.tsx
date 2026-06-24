import { motion } from 'framer-motion'

const plans = [
  {
    name: 'Starter',
    price: '15',
    color: '#EAB308',
    bgColor: '#FEF9C3',
    recommended: false,
    features: [
      { text: 'Using basic skills you can', active: true },
      { text: 'Using basic skills you can impr', active: true },
      { text: 'Using basic skills you can improve', active: true },
      { text: 'Using basic skills you can', active: false },
      { text: 'Using basic skills you can', active: false },
      { text: 'Using basic skills you can', active: false },
    ],
  },
  {
    name: 'Business',
    price: '75',
    color: '#3B82F6',
    bgColor: '#DBEAFE',
    recommended: true,
    features: [
      { text: 'Using basic skills you can', active: true },
      { text: 'Using basic skills you can impr', active: true },
      { text: 'Using basic skills you can improve', active: true },
      { text: 'Using basic skills you can', active: true },
      { text: 'Using basic skills you can', active: false },
      { text: 'Using basic skills you can', active: false },
    ],
  },
  {
    name: 'Premium',
    price: '15',
    color: '#22C55E',
    bgColor: '#DCFCE7',
    recommended: false,
    features: [
      { text: 'Using basic skills you can', active: true },
      { text: 'Using basic skills you can impr', active: true },
      { text: 'Using basic skills you can improve', active: true },
      { text: 'Using basic skills you can', active: true },
      { text: 'Using basic skills you can', active: true },
      { text: 'Using basic skills you can', active: true },
    ],
  },
]

function Pricing() {
  return (
    <section className="bg-[#F0F9FF] py-20 px-8">
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
            Pricing
          </h2>
          <p className="text-gray-400 text-sm">
            Using basic skills you can improve your business stuff with Around
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
  key={i}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.03, boxShadow: '0 0 0 2px #3B82F6' }}
  transition={{ duration: 0.5, delay: i * 0.1 }}
  viewport={{ once: true }}
  className={`bg-white rounded-2xl p-6 flex flex-col gap-4 cursor-pointer ${
    plan.recommended ? 'border-2 border-blue-400 shadow-lg' : ''
  }`}
>
              {/* Plan header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl"
                    style={{ background: plan.color }}
                  >
                    🏆
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: plan.color }}>
                      {plan.name}
                    </p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-gray-500 text-sm">$</span>
                      <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-400 text-xs">Per month</span>
                    </div>
                  </div>
                </div>
                {plan.recommended && (
                  <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
                    Recomended
                  </span>
                )}
              </div>

              {/* Divider */}
              <div className="h-px bg-gray-100"></div>

              {/* Features */}
              <div className="flex flex-col gap-3 flex-1">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-2">
                    {feature.active ? (
                      <span style={{ color: plan.color }}>✓</span>
                    ) : (
                      <span className="text-gray-300">✕</span>
                    )}
                    <p className={`text-xs ${feature.active ? 'text-gray-700' : 'text-gray-300'}`}>
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Button */}
              <button
                className="w-full py-3 rounded-xl text-sm font-medium border transition-colors hover:opacity-80"
                style={{
                  color: plan.color,
                  borderColor: plan.color,
                }}
              >
                Get Start
              </button>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Pricing