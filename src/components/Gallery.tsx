import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    {
      src: 'https://images.pexels.com/photos/4099089/pexels-photo-4099089.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Bacs propres après nettoyage'
    },
    {
      src: 'https://images.pexels.com/photos/6197119/pexels-photo-6197119.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Équipe de nettoyage professionnelle'
    },
    {
      src: 'https://images.pexels.com/photos/4491459/pexels-photo-4491459.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Nettoyage haute pression'
    },
    {
      src: 'https://images.pexels.com/photos/6196959/pexels-photo-6196959.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Matériel de nettoyage professionnel'
    },
    {
      src: 'https://images.pexels.com/photos/5218502/pexels-photo-5218502.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Résultat final bacs propres'
    },
    {
      src: 'https://images.pexels.com/photos/6196954/pexels-photo-6196954.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Service de nettoyage en action'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Nos résultats
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Avant/après : la différence CleanBac Pro
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="aspect-w-4 aspect-h-3 bg-gray-200 rounded-2xl overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-medium">{image.alt}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-gray-600 text-lg">
            <span className="font-bold text-emerald-600">500+ clients</span> déjà conquis
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;