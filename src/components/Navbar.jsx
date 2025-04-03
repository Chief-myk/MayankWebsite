import { useState, useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'
import { FiMoon, FiSun, FiX, FiMenu } from 'react-icons/fi'

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const observerRef = useRef(null)

  const links = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Resume', id: 'resume' },
    { name: 'Projects', id: 'projects' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Contact', id: 'contact' }
  ]

  useEffect(() => {
    // Using IntersectionObserver for better section detection
    const sections = document.querySelectorAll('section[id]')
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    }

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id)
        }
      })
    }

    observerRef.current = new IntersectionObserver(handleIntersection, observerOptions)
    sections.forEach(section => observerRef.current.observe(section))

    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      // Using scrollIntoView for better compatibility
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
      setActiveLink(sectionId)
    }
    setMobileMenuOpen(false)
  }

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled 
          ? 'py-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' 
          : 'py-4 bg-transparent'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <a 
            href="#home" 
            className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent hover:scale-105 transition-transform"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('home')
            }}
          >
            Mayank Mittal
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {links.map((link) => (
              <a 
                key={link.id}
                href={`#${link.id}`}
                className={`relative px-3 py-2 text-lg font-medium transition-all ${
                  activeLink === link.id 
                    ? 'text-orange-500' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400'
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(link.id)
                }}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-3 right-3 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 transition-all duration-300 ${
                  activeLink === link.id ? 'opacity-100' : 'opacity-0'
                }`}></span>
              </a>
            ))}
            
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-orange-500 hover:text-white transition-colors hover:rotate-12"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-orange-500 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
        mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`} onClick={() => setMobileMenuOpen(false)}>
        <div 
          className={`absolute top-0 right-0 h-full w-4/5 max-w-sm bg-white dark:bg-gray-900 shadow-2xl transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-between items-center mb-8">
              <a 
                href="#home" 
                className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('home')
                }}
              >
                Mayank Mittal
              </a>
              <button 
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-orange-500 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <FiX size={24} />
              </button>
            </div>

            <nav className="flex-1 flex flex-col space-y-4">
              {links.map((link) => (
                <a 
                  key={link.id}
                  href={`#${link.id}`}
                  className={`px-4 py-3 text-lg font-medium rounded-lg transition-colors ${
                    activeLink === link.id
                      ? 'bg-orange-500/10 text-orange-500' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(link.id)
                  }}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-700">
              <button 
                onClick={toggleTheme}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-orange-500 hover:text-white transition-colors"
                aria-label="Toggle dark mode"
              >
                {theme === 'dark' ? (
                  <>
                    <FiSun size={20} /> Light Mode
                  </>
                ) : (
                  <>
                    <FiMoon size={20} /> Dark Mode
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar