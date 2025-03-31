import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import { FiMoon, FiSun } from 'react-icons/fi'

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home')
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const links = [
    'Home',
    'About',
    'Resume',
    'Projects',
    'Certifications',
    'Contact'
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Highlight active section
      const sections = document.querySelectorAll('section')
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveLink(sectionId)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md' : 'py-4 bg-transparent'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="#home" 
          className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent"
          onClick={() => setActiveLink('Home')}
        >
          Mayank Mittal
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <a 
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`relative text-lg font-medium transition-colors ${
                activeLink === link ? 'text-orange-500' : 'text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400'
              }`}
              onClick={() => setActiveLink(link)}
            >
              {link}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${
                activeLink === link ? 'w-full' : 'w-0'
              }`}></span>
            </a>
          ))}
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-orange-500 hover:text-white transition-colors"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
        </div>
        
        <button className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  )
}

export default Navbar