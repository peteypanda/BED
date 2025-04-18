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
              The Blue-Eyed Daddies have been friends since high school when they bonded over their mutual love for Becky the hot high school cheerleader but they formed many years later in a German porn addiction rehabilitation unit, bringing together two fresh daddies with blue eyes and no legal visitation rights.

With a shared passion for creating unforgettable experiences (that we often forget, so they're kinda hard to describe) and a unique sound that blends like thick mayo, we're here to entertain you—but mostly to entertain your mom.

And Becky. She's cool too.
            </p>
            <p className="text-gray-300">
              From intimate venues to major festivals, we've been sharing our music and connecting with audiences across the region. Each performance is crafted to create an immersive experience that resonates with our fans.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {/* Band Members */}
          <div className="text-center">
            <div className="relative h-[300px] mb-4">
              <Image
                src="/images/member-1.jpg"
                alt="Petey Puckett"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Petey Puckett</h3>
            <p className="text-gray-300">Petey is the lead vocalist and guitarist of The Blue Eyed Daddies. He has a passion for creating unforgettable experiences and a unique sound that blends like thick mayo.</p>
          </div>
          
          <div className="text-center">
            <div className="relative h-[300px] mb-4">
              <Image
                src="/images/member-2.jpg"
                alt="Ryan Duncan"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Ryan Duncan</h3>
            <p className="text-gray-300">Ryan is the sex appeal of The Blue Eyed Daddies. With his captivating stage presence and irresistible charisma, he brings the heat to every performance and leaves audiences wanting more.</p>
          </div>
          <div className="text-center">
            <div className="relative h-[300px] mb-4">
              <Image
                src="/images/member-3.jpg"
                alt="Becky"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Becky</h3>
            <p className="text-gray-300">Becky is the muse for The Blue Eyed Daddies. With her captivating stage presence and irresistible charisma, she brings the heat to every performance and leaves audiences wanting more.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gray-800 p-8 rounded-lg"
        >
          <h2 className="text-2xl font-bold mb-4">Our mission</h2>
          <p className="text-gray-300">
            To make your mom happy and come again and again 
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
