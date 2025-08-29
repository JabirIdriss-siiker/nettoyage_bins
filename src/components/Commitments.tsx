import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Clock, Shield, Heart } from 'lucide-react';

const Commitments = () => {
  const commitments = [
    {
      icon: Leaf,
      title: '100% Écologique',
      description: 'Produits biodégradables',
      color: 'emerald'
    },
    {
      icon: Clock,
      title: 'Toujours à l\'heure',
      description: 'Service ponctuel garanti',
      color: 'cyan'
    },
    {
      icon: Shield,
      title: 'Hygiène totale',
      description: '99,9% des bactéries éliminées',
      color: 'blue'
    },
    {
      icon: Heart,
      title: 'Satisfait ou remboursé',
      description: 'Garantie 100% satisfaction',
      color: 'emerald'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: 'from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700',
      cyan: 'from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700',
      blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700'
    };
    return colors[color as keyof typeof colors] || colors.emerald;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Pourquoi nous choisir ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            4 bonnes raisons de nous faire confiance
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {commitments.map((commitment, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-emerald-200">
                {/* Icon */}
                <motion.div
                  className={`bg-gradient-to-r ${getColorClasses(commitment.color)} p-4 rounded-2xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <commitment.icon className="h-8 w-8 text-white" />
                </motion.div>

                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-emerald-600 transition-colors">
                  {commitment.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {commitment.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Commitments;