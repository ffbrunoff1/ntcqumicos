import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Facebook, Heart } from 'lucide-react'

export default function Footer() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      content: '(11) 5242-4280',
      link: 'tel:1152424280'
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      content: '(19) 98361-0058',
      link: 'https://wa.me/5519983610058'
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'contato@ntcbrasil.com.br',
      link: 'mailto:contato@ntcbrasil.com.br'
    },
    {
      icon: MapPin,
      title: 'Localização',
      content: 'Todo o Brasil',
      link: '#'
    }
  ]

  const products = [
    'Aditivos para Concreto',
    'Argamassas',
    'Desmoldantes',
    'Impermeabilizantes',
    'Hidrofugantes',
    'Tratamento de Superfície',
    'Selantes'
  ]

  const quickLinks = [
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
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754671903251_o3v0zp7y0y_Co_pia_de_Design_sem_nome.png"
                alt="NTC Brasil"
                className="h-12 w-auto mb-4 [filter:brightness(0)_invert(1)]"
              />
              <p className="text-gray-300 leading-relaxed">
                Especialistas em soluções químicas para construção civil. 
                Mais de 15 anos transformando projetos com qualidade e inovação.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <motion.a
                  href="https://facebook.com/ntcbrasil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-primary-600 rounded-lg hover:bg-primary-500 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-primary-400 transition-colors cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold">Nossos Produtos</h4>
            <ul className="space-y-3">
              {products.slice(0, 5).map((product, index) => (
                <motion.li key={index}>
                  <span className="text-gray-300 cursor-pointer hover:text-primary-400 transition-colors">
                    {product}
                  </span>
                </motion.li>
              ))}
              <motion.li>
                <span className="text-gray-400 text-sm">E muito mais...</span>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold">Contato</h4>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.li key={index}>
                  <a
                    href={item.link}
                    className="flex items-center space-x-3 text-gray-300 hover:text-primary-400 transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span className="text-sm">{item.content}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-800 py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 NTC Brasil. Todos os direitos reservados.
            </div>
            
            <motion.div
              className="flex items-center space-x-2 text-gray-400 text-sm"
              whileHover={{ scale: 1.05 }}
            >
              <span>Criado com</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>por</span>
              <a
                href="https://papum.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 transition-colors font-medium"
              >
                Papum
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}