import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'

const Footer = () => {
  const socialLinks = [
    { icon: <FiGithub size={20} />, url: 'https://github.com/Chief-myk/', name: 'GitHub' },
    { icon: <FiLinkedin size={20} />, url: 'https://www.linkedin.com/in/mayankmittal1311/', name: 'LinkedIn' },
    { icon: <FiTwitter size={20} />, url: 'https://x.com/MayankMittal06', name: 'Twitter' },
    { icon: <FiMail size={20} />, url: 'mailto:mayankmittal1106@gmail.com', name: 'Email' }
  ]

  return (
    <footer className="bg-gray-100 dark:bg-gray-900/50 py-12">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Mayank Mittal</h3>
          
          <div className="flex space-x-6 mb-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all text-gray-700 dark:text-gray-300 hover:text-orange-500"
                aria-label={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
          
          <div className="text-center text-gray-600 dark:text-gray-400 mb-8">
            <p className="mb-2">"Driven by passion, fueled by innovation – creating technology that inspires and empowers the world."</p>
          </div>
          
          <div className="w-full border-t border-gray-200 dark:border-gray-700 mb-8"></div>
          
          <p className="text-sm text-gray-500 dark:text-gray-500">
            &copy; {new Date().getFullYear()} Mayank Mittal. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer