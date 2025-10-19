'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Youtube, Mail, Instagram, Calendar, Twitter, Github } from 'lucide-react'

export default function Component() {
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  const name = 'Llewellyn Y. Fisher'
  const title = 'Designer'
  const currentlyCooking = 'Building & Learning'
  const projects = [
    { name: 'Telluricaquarian™', description: '"Raising Awareness of Water Quality"' },
    { name: 'Areculateir™', description: '"Foresight Into Reality"' }
  ]
  const services = [
    { 
      title: 'Hire me as your web. des./dev.', 
      description: 'i have experience building websites, funnels, landing pages & ecommerce - i also know how to media buy on meta.',
      action: (
        <a
          href="#"
          className="rotating-gradient inline-block rounded-2xl text-white font-bold mt-4 w-full transition-transform hover:scale-105"
        >
          <span className="block bg-[#1a1a1a] rounded-xl px-4 py-2 text-center">
            Hire: $4699
          </span>
        </a>
      )
    },
    {
      title: 'Book a Consultation / Discovery Call',
      description: 'Thinking of acquiring a water ioniser and ready to make the change + upgrade to your water quality?',
      action: (
        <a
          href="https://calendly.com/tellurcaquarian/15-30-min-discovery-call"
          target="_blank"
          rel="noopener noreferrer"
          className="rotating-gradient inline-block rounded-2xl text-white font-bold mt-4 w-full transition-transform hover:scale-105"
        >
          <span className="block bg-[#1a1a1a] rounded-xl px-4 py-2 text-center">
            Book a Discovery Call
          </span>
        </a>
      )
    },
    { 
      title: 'Want to Collaborate/Sponsor a Video',
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cryptocurrency%20(6)-BXoEi59TUUZ2Ug7ArBuZqqrjDNrwxP.png",
      description: '@thethinkingspirit youtube channel has around 89 subscribers, looking to partner with brands that would meet coalesce with my niche audience' 
    }
  ]

  return (
    <>
      <style jsx global>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(1); opacity: 0.8; }
        }
        .pulse {
          animation: pulse 2s infinite;
        }
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .rotating-gradient {
          position: relative;
          z-index: 0;
          overflow: hidden;
          padding: 1px;
          border-radius: 16px;
        }
        .rotating-gradient::before {
          content: '';
          position: absolute;
          z-index: -2;
          left: -50%;
          top: -50%;
          width: 200%;
          height: 200%;
          background-color: transparent;
          background-repeat: no-repeat;
          background-position: 0 0;
          background-image: conic-gradient(
            from 0deg,
            transparent 0%,
            transparent 25%,
            rgba(168, 85, 247, 0.8) 35%,
            rgba(168, 85, 247, 1) 50%,
            rgba(168, 85, 247, 0.8) 65%,
            transparent 75%,
            transparent 100%
          );
          animation: rotate 4s linear infinite;
        }
        .rotating-gradient::after {
          content: '';
          position: absolute;
          z-index: -1;
          left: 1px;
          top: 1px;
          width: calc(100% - 2px);
          height: calc(100% - 2px);
          background: #1a1a1a;
          border-radius: 15px;
        }
        .gradient-border {
          position: relative;
          background: transparent;
          padding: 3px;
          border-radius: 16px;
        }
        .gradient-border::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 16px; 
          border: 1px solid transparent;
          background: linear-gradient(45deg, rgba(255,255,255,0.1), rgba(128,128,128,0.1)) border-box;
          -webkit-mask:
            linear-gradient(#fff 0 0) padding-box, 
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: destination-out;
          mask-composite: exclude;
          pointer-events: none;
        }
      `}</style>

      <div className="min-h-screen bg-zinc-950 text-white">
        <div className="max-w-3xl mx-auto p-4 sm:p-6 lg:p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="gradient-border mb-8"
          >
            <div className="bg-zinc-950 backdrop-blur-sm rounded-lg p-4 lg:p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div 
                    className="relative w-16 h-16 mr-4 cursor-pointer lg:w-20 lg:h-20"
                    onClick={() => setIsProfileOpen(true)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full pulse"></div>
                    <img 
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/77%20(1)%201-BcRmS8hJ4ntinXK5jDcyxJWL16BDoI.png" 
                      alt="Profile" 
                      className="absolute inset-0 w-full h-full object-cover rounded-full z-10"
                    />
                  </div>
                  <div>
                    <h1 className="text-xl font-bold mb-1 lg:text-2xl">{name}</h1>
                    <p className="text-sm text-gray-400 lg:text-base">{title}</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Youtube size={20} className="cursor-pointer hover:text-gray-300 transition-colors" />
                  <Instagram size={20} className="cursor-pointer hover:text-gray-300 transition-colors" />
                  <Mail size={20} className="cursor-pointer hover:text-gray-300 transition-colors" />
                  <Twitter size={20} className="cursor-pointer hover:text-gray-300 transition-colors hidden sm:block" />
                  <Github size={20} className="cursor-pointer hover:text-gray-300 transition-colors hidden sm:block" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="gradient-border mb-8"
          >
            <div className="bg-zinc-950 backdrop-blur-sm rounded-lg p-4">
              <p className="text-lg lg:text-xl">{currentlyCooking}</p>
            </div>
          </motion.div>

          <div className="grid gap-4 mb-8 sm:grid-cols-2 lg:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="gradient-border"
              >
                <div className="bg-zinc-950 backdrop-blur-sm rounded-lg p-4 relative">
                  <h2 className="text-lg font-bold mb-1 lg:text-xl">{project.name}</h2>
                  <p className="text-gray-400">{project.description}</p>
                  <div className="absolute top-4 right-4">
                    {index === 0 && (
                      <img 
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/77%20(4)-rE462U8ZWZ0pCIWlyUG9IcPFstcDpa.png" 
                        alt="Building & Learning icon" 
                        className="w-6 h-6"
                      />
                    )}
                    {index === 1 && (
                      <img 
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/77%20(5)-GYUJXQnEwBCfz3V1odAlFmi3xWhNpu.png" 
                        alt="Telluricaquarian icon" 
                        className="w-6 h-6"
                      />
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg font-bold mb-4 lg:text-xl"
          >
            Services
          </motion.div>

          <div className="grid gap-4 w-full">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="gradient-border"
              >
                <div className="bg-zinc-950 backdrop-blur-sm rounded-lg p-4">
                  {service.image && (
                    <div className="mb-4 rounded-lg overflow-hidden">
                      <img 
                        src={service.image} 
                        alt="Learn & Build with me" 
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  )}
                  <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  {service.action && service.action}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center text-sm text-gray-500 mt-8 mb-20 space-y-2"
          >
            <div>
              <a 
                href="https://telluricaquarian.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors"
              >
                W: https://telluricaquarian.com/
              </a>
            </div>
            <div>Castles Built in the Sky</div>
          </motion.div>
        </div>

        {/* Sticky Book a Call button */}
        <a
          href="https://calendly.com/tellurcaquarian/15-30-min-discovery-call"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50"
        >
          <div className="rotating-gradient inline-block rounded-2xl transition-transform hover:scale-105">
            <div className="flex items-center gap-2 bg-[#1a1a1a] rounded-xl px-4 py-2.5 text-sm font-medium">
              <Calendar size={14} />
              <span>Book a Call</span>
            </div>
          </div>
        </a>
      </div>
    </>
  )
}