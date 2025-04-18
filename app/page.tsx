'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
          The Blue Eyed Daddies
        </h1>
        <p className="text-xl text-gray-300">
        You won't find us, but you'll like what you find.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="relative h-[80vh] mb-16"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900 z-10" />
        <Image
          src="/images/band-sad.jpg"
          alt="The Blue Eyed Daddies performing"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
          priority
          className="rounded-lg"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
      >
        <div className="bg-gray-800 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Latest News</h2>
          <p className="text-gray-300">
            Stay tuned for our upcoming shows at your moms house and latest onlyfans releases. Follow us on pornhub for the latest updates!
          </p>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Featured Music</h2>
          <p className="text-gray-300">
            Check out our latest tracks and videos with your mom in the media section. New content added regularly!  They rock!-Your mom
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold mb-8">Upcoming Shows</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Placeholder shows - replace with real data */}
          {[1, 2, 3].map((show) => (
            <motion.div
              key={show}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-2">your moms house</h3>
              <p className="text-gray-300">Coming Soon</p>
              <p className="text-blue-400 mt-4">More Info →</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
