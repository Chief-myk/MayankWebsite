import { motion } from 'framer-motion'
import { FiDownload, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

const Hero = () => {
  const socialLinks = [
    { icon: <FiGithub size={24} />, url: 'https://github.com' },
    { icon: <FiLinkedin size={24} />, url: 'https://linkedin.com' },
    { icon: <FiTwitter size={24} />, url: 'https://twitter.com' }
  ]

  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center pt-20 md:pt-0">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 px-6 md:px-12 text-center md:text-left"
      >
        <p className="text-orange-500 font-mono mb-4">Namaste! I'm</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="text-gray-900 dark:text-white">Mayank </span>
          <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">Mittal</span>
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-600 dark:text-gray-300 mb-6">
          Data Analyst & Decision Support Specialist
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
          Transforming complex data into actionable insights with expertise in Power BI, SQL, and Python.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full font-medium shadow-lg hover:shadow-orange-500/30 transition-all"
          >
            View My Work
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/resume.pdf"
            download
            className="px-8 py-3 border-2 border-orange-500 text-orange-500 dark:text-orange-400 rounded-full font-medium flex items-center gap-2 hover:bg-orange-500/10 transition-all"
          >
            <FiDownload /> Download CV
          </motion.a>
        </div>
        
        <div className="flex justify-center md:justify-start gap-4 mt-8">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all"
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full blur-xl opacity-30"></div>
          <img 
            src="/assets/shiv-ji.jpg" 
            alt="Mayank Mittal" 
            className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-xl"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero