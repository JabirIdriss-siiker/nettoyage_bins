import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Abonnement',
      price: '40€',
      period: '/mois',
      description: 'Le plus économique',
      features: [
        'Nettoyage mensuel',
        'Produits écologiques',
        'Désinfection totale',
        'Support prioritaire',
        'Sans engagement'
      ],
      popular: true,
      color: 'emerald'
    },
    {
      name: 'À la demande',
      price: '25€',
      period: '/intervention',
      description: 'Quand vous voulez',
      features: [
        'Intervention rapide',
        'Haute pression',
        'Désodorisation',
        'Produits pro',
        'Résultat garanti'
      ],
      popular: false,
      color: 'blue'
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Tarifs simples
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent, sans surprise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 ${
                plan.popular ? 'ring-4 ring-emerald-500 ring-opacity-50' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>Le plus populaire</span>
                  </div>
                </div>
              )}

              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="flex items-baseline justify-center space-x-1">
                    <span className={`text-5xl font-bold bg-gradient-to-r ${
                      plan.color === 'emerald' 
                        ? 'from-emerald-600 to-cyan-600' 
                        : 'from-blue-600 to-cyan-600'
                    } bg-clip-text text-transparent`}>
                      {plan.price}
                    </span>
                    <span className="text-gray-500 text-lg">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (index * 0.2) + (featureIndex * 0.1) }}
                    >
                      <div className={`bg-gradient-to-r ${
                        plan.color === 'emerald' 
                          ? 'from-emerald-500 to-cyan-500' 
                          : 'from-blue-500 to-cyan-500'
                      } p-1 rounded-full`}>
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  onClick={scrollToContact}
                  className={`w-full bg-gradient-to-r ${
                    plan.color === 'emerald' 
                      ? 'from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600' 
                      : 'from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600'
                  } text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Choisir ce plan
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;