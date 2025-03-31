import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-8 cursor-pointer right-8 p-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all z-40"
      aria-label="Scroll to top"
    >
      <FiArrowUp size={24} />
    </motion.button>
  )
}

export default ScrollToTop