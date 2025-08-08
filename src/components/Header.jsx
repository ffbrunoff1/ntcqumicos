import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Início', href: '#hero' },
    { name: 'Sobre', href: '#about' },
    { name: 'Produtos', href: '#services' },
    { name: 'Contato', href: '#contact' }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1754667300807_0.png"
              alt="NTC Brasil"
              className="h-12 w-auto"
            />
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="font-medium transition-colors duration-300 hover:text-primary-400 text-gray-800"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
              </motion.button>
            ))}
            
            <motion.a
              href="tel:1152424280"
              className="flex items-center space-x-2 bg-primary-400 text-white px-4 py-2 rounded-lg hover:bg-primary-500 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Phone size={16} />
              <span className="font-medium">(11) 5242-4280</span>
            </motion.a>
          </nav>

          <motion.button
            className="md:hidden p-2 rounded-lg transition-colors text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {isOpen && (
          <motion.div
            className="md:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 p-4 shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-3 px-2 text-gray-800 hover:text-primary-400 transition-colors border-b border-gray-100 last:border-0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
              </motion.button>
            ))}
            
            <motion.a
              href="tel:1152424280"
              className="flex items-center space-x-2 bg-primary-400 text-white px-4 py-3 rounded-lg hover:bg-primary-500 transition-colors mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Phone size={16} />
              <span className="font-medium">(11) 5242-4280</span>
            </motion.a>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}