'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <div className="pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 text-center">About The Band</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative h-[400px]"
          >
            <Image
              src="/images/band-about.jpg"
              alt="The Blue Eyed Daddies"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-300 mb-4">
              

The Blue-Eyed Daddies formed in a German porn addiction rehabilitation unit, bringing together two fresh daddies with blue eyes and no legal visitation rights.

With a shared passion for creating unforgettable experiences (that we often forget, so they’re kinda hard to describe) and a unique sound that blends like thick mayo, we’re here to entertain you—but mostly to entertain your mom.

And Becky. She’s cool too.
            <p className="text-gray-300">
              From intimate venues to major festivals, we've been sharing our music and connecting with audiences across the region. Each performance is crafted to create an immersive experience that resonates with our fans.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {/* Band Members */}
          {[1, 2, 3].map((member) => (
            <div key={member} className="text-center">
              <div className="relative h-[300px] mb-4">
                <Image
                  src={`/images/member-${member}.jpg`}
                  alt={`Band Member ${member}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Band Member {member}</h3>
              <p className="text-gray-300">Instrument</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gray-800 p-8 rounded-lg"
        >
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-300">
            We're dedicated to creating authentic, powerful music that connects with people on a deep level. Through our performances and recordings, we aim to share our passion for music while pushing creative boundaries and delivering unforgettable experiences to our audience.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
