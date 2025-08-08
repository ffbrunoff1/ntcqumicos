import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Shield, Zap, Award, Building2 } from 'lucide-react'

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToServices = () => {
    document.querySelector('#services').scrollIntoView({ behavior: 'smooth' })
  }

  const features = [
    { icon: Shield, text: 'Qualidade Garantida' },
    { icon: Zap, text: 'Inovação Constante' },
    { icon: Award, text: 'Expertise Comprovada' },
    { icon: Building2, text: 'Para Todo Brasil' }
  ]

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 hero-gradient"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary-400/5 to-accent-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-primary-700 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Zap className="w-4 h-4 mr-2 text-primary-400" />
              Soluções Químicas Inovadoras
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-gray-800">Transforme sua</span>
              <br />
              <span className="gradient-text">Construção</span>
              <br />
              <span className="text-gray-700">com Qualidade</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Desenvolvemos soluções químicas de ponta para o setor de construção. 
              Inovação e qualidade em cada produto para garantir o sucesso do seu projeto.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.button
                onClick={scrollToContact}
                className="group inline-flex items-center justify-center px-8 py-4 bg-primary-400 text-white font-semibold rounded-lg hover:bg-primary-500 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                onClick={scrollToServices}
                className="inline-flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-800 font-semibold rounded-lg hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Produtos
              </motion.button>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-6 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <div className="flex items-center justify-center w-10 h-10 bg-primary-400/20 rounded-lg">
                    <feature.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative z-10">
              <motion.div
                className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl"
                whileInView={{ y: [20, 0] }}
                transition={{ duration: 0.6 }}
              >
                <div className="grid grid-cols-2 gap-6">
                  <motion.div
                    className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-6 text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-3xl font-bold text-primary-600 mb-2">15+</div>
                    <div className="text-gray-600 font-medium">Anos de Experiência</div>
                  </motion.div>

                  <motion.div
                    className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-2xl p-6 text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-3xl font-bold text-accent-600 mb-2">1000+</div>
                    <div className="text-gray-600 font-medium">Projetos Realizados</div>
                  </motion.div>

                  <motion.div
                    className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 text-center col-span-2"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                    <div className="text-gray-600 font-medium">Qualidade Garantida</div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center shadow-lg"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Award className="w-12 h-12 text-white" />
              </motion.div>
            </div>

            <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-accent-400/20 to-accent-600/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-primary-400/20 to-primary-600/20 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}