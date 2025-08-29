import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Droplets, CheckCircle } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: Truck,
      title: '1. On récupère',
      description: 'Collecte selon votre planning',
      color: 'from-emerald-500 to-cyan-500'
    },
    {
      icon: Droplets,
      title: '2. On nettoie',
      description: 'Haute pression + désinfection',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: CheckCircle,
      title: '3. On rend',
      description: 'Bacs propres et sans odeurs',
      color: 'from-blue-500 to-emerald-500'
    }
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Comment ça marche ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, rapide, efficace
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4">
                  <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                </div>

                {/* Icon */}
                <motion.div
                  className={`bg-gradient-to-r ${step.color} p-4 rounded-2xl inline-block mb-6`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <step.icon className="h-8 w-8 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-emerald-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 transform -translate-y-1/2"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;