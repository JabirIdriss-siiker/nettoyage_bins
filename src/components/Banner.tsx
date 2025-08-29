import React from 'react';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <motion.div
      className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 py-4"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-white text-xl md:text-2xl font-bold">
            🚮 Un bac propre, sans odeurs, toute l'année – Abonnement dès 15€/mois ✨
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Banner;