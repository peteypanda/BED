'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

export default function Media() {
  const [activeTab, setActiveTab] = useState('photos');

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="pt-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        Media Gallery
      </motion.h1>

      <div className="flex justify-center mb-8">
        <div className="flex space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2 rounded-full ${
              activeTab === 'photos'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-700 text-gray-300'
            }`}
            onClick={() => setActiveTab('photos')}
          >
            Photos
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2 rounded-full ${
              activeTab === 'videos'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-700 text-gray-300'
            }`}
            onClick={() => setActiveTab('videos')}
          >
            Videos
          </motion.button>
        </div>
      </div>

      {activeTab === 'photos' && (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Placeholder for photos - replace src with actual images */}
          {[1, 2, 3, 4, 5, 6].map((photo) => (
            <motion.div
              key={photo}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square bg-gray-800 rounded-lg overflow-hidden"
            >
              <Image
                src={`/images/photo-${photo}.jpg`}
                alt={`Band photo ${photo}`}
                fill
                style={{ objectFit: 'cover' }}
                className="hover:opacity-75 transition-opacity"
              />
            </motion.div>
          ))}
        </motion.div>
      )}

      {activeTab === 'videos' && (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Placeholder for videos - replace with actual video embeds */}
          {[1, 2, 3, 4].map((video) => (
            <motion.div
              key={video}
              variants={item}
              className="aspect-video bg-gray-800 rounded-lg overflow-hidden"
            >
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                Video {video} Placeholder
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
