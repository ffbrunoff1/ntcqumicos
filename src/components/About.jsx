import React from 'react'
import { motion } from 'framer-motion'
import { Target, Users, Award, Lightbulb, CheckCircle, Star } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Foco em Resultados',
      description: 'Comprometimento total com o sucesso dos projetos dos nossos clientes.'
    },
    {
      icon: Users,
      title: 'Parceria Sólida',
      description: 'Construímos relacionamentos duradouros baseados na confiança mútua.'
    },
    {
      icon: Award,
      title: 'Excelência Técnica',
      description: 'Padrões rigorosos de qualidade em todos os nossos produtos e serviços.'
    },
    {
      icon: Lightbulb,
      title: 'Inovação Contínua',
      description: 'Sempre buscando novas tecnologias e soluções para o mercado.'
    }
  ]

  const achievements = [
    { number: '15+', label: 'Anos de Mercado' },
    { number: '1000+', label: 'Projetos Concluídos' },
    { number: '500+', label: 'Clientes Satisfeitos' },
    { number: '7', label: 'Linhas de Produtos' }
  ]

  const differentials = [
    'Produtos desenvolvidos com tecnologia de ponta',
    'Equipe técnica altamente qualificada',
    'Atendimento personalizado para cada projeto',
    'Suporte técnico especializado',
    'Entrega rápida em todo o Brasil',
    'Garantia de qualidade em todos os produtos'
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-primary-700 font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Star className="w-4 h-4 mr-2" />
            Sobre a NTC Brasil
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Especialistas em
            <span className="gradient-text"> Soluções Químicas</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Com mais de 15 anos de experiência, a NTC Brasil é referência no desenvolvimento 
            de soluções químicas inovadoras para o setor de construção civil, oferecendo 
            produtos de alta qualidade e performance.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Nossa Missão
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Desenvolver e fornecer soluções químicas inovadoras que transformem 
                a construção civil, garantindo qualidade, durabilidade e eficiência 
                em cada projeto. Nosso compromisso é com a excelência e a satisfação 
                total dos nossos clientes.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Nossos Diferenciais
              </h3>
              <div className="grid gap-4">
                {differentials.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                Nossos Números
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-3xl font-bold text-primary-600 mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {achievement.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-primary-400/20 to-primary-600/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-accent-400/20 to-accent-600/20 rounded-full blur-xl"></div>
          </motion.div>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg card-hover text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl mb-6">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {value.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}