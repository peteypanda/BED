'use client';
import { motion } from 'framer-motion';

export default function Shows() {
  // Example show data - replace with real data
  const shows = [
    {
      id: 1,
      date: '2025-05-15',
      venue: 'The Blue Room',
      city: 'Seattle, WA',
      time: '8:00 PM',
      ticketLink: '#',
    },
    {
      id: 2,
      date: '2025-05-22',
      venue: 'Sound Garden',
      city: 'Portland, OR',
      time: '9:00 PM',
      ticketLink: '#',
    },
    {
      id: 3,
      date: '2025-06-01',
      venue: 'The Melody Bar',
      city: 'Vancouver, BC',
      time: '7:30 PM',
      ticketLink: '#',
    },
  ];

  return (
    <div className="pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 text-center">Upcoming Shows</h1>

        <div className="space-y-6">
          {shows.map((show) => (
            <motion.div
              key={show.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 rounded-lg p-6 flex flex-col md:flex-row justify-between items-center gap-4"
            >
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold mb-2">{show.venue}</h2>
                <p className="text-gray-300">{show.city}</p>
              </div>
              
              <div className="text-center">
                <p className="text-xl font-bold mb-1">
                  {new Date(show.date).toLocaleDateString('en-US', {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
                <p className="text-gray-300">{show.time}</p>
              </div>
              
              <motion.a
                href={show.ticketLink}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
              >
                Get Tickets
              </motion.a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center bg-gray-800 p-8 rounded-lg"
        >
          <h2 className="text-2xl font-bold mb-4">Want to Book Us?</h2>
          <p className="text-gray-300 mb-6">
            Looking to have The Blue Eyed Daddies perform at your venue or private event?
            Get in touch with us through our contact page!
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
          >
            Contact Us
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
}
