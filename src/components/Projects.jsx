import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import Modal from './Modal'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const projects = [
    {
  id: 1,
  title: "Full Stack Portfolio",
  description: "Designed and developed a personalized full stack portfolio from scratch, showcasing technical expertise and academic achievements. Implemented a modern UI with seamless animations and responsive design.",
  image: "/assets/portfolio.jpg",
  tags: ["React", "Tailwind CSS", "Vite", "JavaScript"],
  githubUrl: "https://github.com/Chief-myk/YASHPAL-SIR-PROJECT",
  liveUrl: "https://www.yashpalchopra.com/",
  details: [
    "Created a visually stunning portfolio with modern design and smooth animations",
    "Integrated responsive UI using Tailwind CSS for consistent performance across devices",
    "Implemented animations with GSAP for dynamic page transitions",
    "Optimized performance using Vite for faster build times",
    "Deployed on Vercel for reliable and scalable hosting"
  ]
},
   {
  id: 2,
  title: "JARVIS AI System",
  description: "Developed a cutting-edge AI assistant inspired by Iron Man's JARVIS, capable of controlling devices through voice commands and hand gestures for a futuristic, hands-free experience.",
  image: "/assets/jarvis.jpg",
  tags: ["Python", "Flask", "MediaPipe", "OpenCV", "Speech Recognition"],
  githubUrl: "https://github.com/Chief-myk/Jarvis-Ai-Voice-Gesture-Control",
  liveUrl: "https://jarvis-ai-voice-gesture-control.vercel.app/",
  details: [
    "Built an AI assistant with gesture control and voice command support",
    "Integrated MediaPipe for real-time hand gesture recognition",
    "Implemented system automation for volume control, mouse movements, and app management",
    "Developed text-to-speech and speech recognition features for seamless interaction",
    "Deployed a Flask-based server for real-time AI responses and command processing"
  ]
},

   {
  id: 3,
  title: "Fit-Game - Gamified Fitness Platform",
  description: "Created a unique fitness-based game where players must perform real-life physical actions to progress, blending exercise and entertainment for a healthier lifestyle.",
  image: "/assets/fit-game.png",
  tags: ["Python", "OpenCV", "MediaPipe", "Machine Learning", "Flask"],
  githubUrl: "https://github.com/Chief-myk/Fit_Games",
  liveUrl: "",
  details: [
    "Designed a fitness-focused game requiring real-life actions for gameplay progression",
    "Integrated real-time pose detection using MediaPipe for accurate movement tracking",
    "Developed a reward system to motivate users through fitness milestones",
    "Incorporated Flask for backend management and real-time data processing",
    "Optimized for smooth performance and low-latency response"
  ]
},
  ]

  const openModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = 'auto'
  }
  

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">My </span>
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
           Here are some of my innovative tech projects showcasing my expertise in AI, full-stack development, IoT, and 3D simulations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer"
              onClick={() => openModal(project)}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-xs font-medium rounded-full text-gray-800 dark:text-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {isModalOpen && selectedProject && (
        <Modal onClose={closeModal}>
          <div className="max-w-4xl w-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-2xl">
            <div className="relative h-64 md:h-58 overflow-hidden">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover"
              />
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">{selectedProject.title}</h3>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm font-medium rounded-full text-gray-800 dark:text-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6">{selectedProject.description}</p>
              
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Project Details:</h4>
                <ul className="space-y-2">
                  {selectedProject.details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <span className="text-gray-700 dark:text-gray-300">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-4">
                {selectedProject.githubUrl && (
                  <a 
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
                  >
                    <FiGithub /> View Code
                  </a>
                )}
                {selectedProject.liveUrl && (
                  <a 
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full hover:opacity-90 transition-opacity"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </Modal>
      )}
    </section>
  )
}

export default Projects