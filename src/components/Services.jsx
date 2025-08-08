import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Droplet, Hammer, Shield, Palette, Zap, Wrench, Lock } from 'lucide-react'

export default function Services() {
  const products = [
    {
      title: 'Aditivos para Concreto',
      description: 'Aumente a durabilidade e desempenho do seu concreto com nossos aditivos de alta qualidade. Desenvolvidos para melhorar a trabalhabilidade, resistência e tempo de cura, nossos produtos são ideais para diversas aplicações na construção civil.',
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/imagem_1754667617524_0.png',
      icon: Zap,
      benefits: ['Maior resistência', 'Melhor trabalhabilidade', 'Economia de custos', 'Durabilidade superior']
    },
    {
      title: 'Argamassas',
      description: 'Nossa linha de argamassas oferece soluções inovadoras e de alta qualidade para todas as suas necessidades de construção. Desenvolvidas para garantir resistência e durabilidade, são ideais para assentamento de cerâmicas, porcelanatos, blocos e tijolos.',
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/imagem_1754667617524_1.png',
      icon: Hammer,
      benefits: ['Aplicação fácil', 'Acabamento perfeito', 'Resistência às intempéries', 'Versatilidade de uso']
    },
    {
      title: 'Desmoldantes',
      description: 'Desmoldantes são essenciais para processos de fabricação onde é necessário separar peças moldadas de seus moldes, preservando a integridade e a qualidade do produto final. Formam uma barreira eficaz que previne aderências indesejadas.',
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/imagem_1754667617524_2.png',
      icon: Palette,
      benefits: ['Remoção fácil', 'Acabamento impecável', 'Economia de tempo', 'Múltiplas formulações']
    },
    {
      title: 'Impermeabilizantes',
      description: 'Descubra a solução ideal para proteger suas superfícies com nossos impermeabilizantes de alta performance. Desenvolvidos com tecnologia avançada, garantem proteção superior contra infiltrações e umidade, prolongando a vida útil de estruturas.',
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/imagem_1754667617524_3.png',
      icon: Shield,
      benefits: ['Proteção superior', 'Aplicação versátil', 'Resistência e durabilidade', 'Prevenção de infiltrações']
    },
    {
      title: 'Hidrofugantes',
      description: 'Os hidrofugantes são soluções inovadoras desenvolvidas para proteger superfícies contra a absorção de água. Ideais para uso em fachadas, telhados e pisos, criam uma barreira invisível que impede a penetração da umidade sem comprometer a beleza.',
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/imagem_1754667617524_4.png',
      icon: Droplet,
      benefits: ['Barreira invisível', 'Preserva textura original', 'Previne mofo e manchas', 'Aplicação rápida']
    },
    {
      title: 'Tratamento de Superfície',
      description: 'O tratamento de superfície é essencial para melhorar a durabilidade e o desempenho de materiais em diversas aplicações industriais. Nossos serviços especializados oferecem técnicas avançadas como jateamento, anodização e aplicação de revestimentos protetores.',
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/imagem_1754667617524_5.png',
      icon: Wrench,
      benefits: ['Tecnologia de ponta', 'Soluções personalizadas', 'Maior vida útil', 'Resistência à corrosão']
    },
    {
      title: 'Selantes',
      description: 'Os selantes são produtos essenciais para garantir vedação eficiente em diversas aplicações, desde construções civis até reparos domésticos. Disponíveis em diversas formulações, como silicone, acrílico e poliuretano, se adaptam a diferentes superfícies.',
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/imagem_1754667617524_6.png',
      icon: Lock,
      benefits: ['Vedação eficiente', 'Múltiplas formulações', 'Fácil aplicação', 'Acabamento profissional']
    }
  ]

  const scrollToContact = () => {
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="services" className="section-padding bg-white">
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
            <Hammer className="w-4 h-4 mr-2" />
            Nossos Produtos
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Soluções Químicas
            <span className="gradient-text"> Inovadoras</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Desenvolvemos uma linha completa de produtos químicos especializados para 
            atender todas as necessidades da construção civil moderna.
          </p>
        </motion.div>

        <div className="space-y-16">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                />
              </motion.div>

              <motion.div
                className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl">
                    <product.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800">
                    {product.title}
                  </h3>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed">
                  {product.description}
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {product.benefits.map((benefit, benefitIndex) => (
                    <motion.div
                      key={benefitIndex}
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: benefitIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                      <span className="text-gray-700 font-medium text-sm">
                        {benefit}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  onClick={scrollToContact}
                  className="inline-flex items-center px-6 py-3 bg-primary-400 text-white font-semibold rounded-lg hover:bg-primary-500 transition-all duration-300 shadow-lg hover:shadow-xl group mt-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Solicitar Informações
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-20 bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Precisa de uma Solução Personalizada?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Nossa equipe técnica especializada está pronta para desenvolver 
            soluções sob medida para seu projeto específico.
          </p>
          
          <motion.button
            onClick={scrollToContact}
            className="inline-flex items-center px-8 py-4 bg-primary-400 text-white font-semibold rounded-lg hover:bg-primary-500 transition-all duration-300 shadow-lg hover:shadow-xl group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Falar com Especialista
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}