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
      title: "Quantium Super Store Data Analysis",
      description: "Analyzed purchasing trends and customer segments' chip-buying habits using Python, uncovering patterns and insights into preferences and behaviors.",
      image: "/assets/proj_1.png",
      tags: ["Python", "Pandas", "NumPy", "Matplotlib"],
      githubUrl: "#",
      liveUrl: "#",
      details: [
        "Performed exploratory data analysis on retail transaction data",
        "Identified key customer segments and their purchasing patterns",
        "Created visualizations to showcase sales trends and product performance",
        "Developed recommendations for inventory management and marketing strategies"
      ]
    },
    {
      id: 2,
      title: "Web Performance Data Analysis Dashboard",
      description: "Power BI dashboard analyzing key performance indicators, trends, and acquisition channels to identify optimization opportunities.",
      image: "/assets/proj_2.jfif",
      tags: ["Power BI", "DAX", "Data Modeling"],
      githubUrl: "#",
      liveUrl: "#",
      details: [
        "Integrated multiple data sources into a unified data model",
        "Created interactive visualizations for traffic patterns and engagement metrics",
        "Developed calculated measures using DAX for key metrics",
        "Implemented drill-through functionality for detailed analysis"
      ]
    },
    {
      id: 3,
      title: "Hospital Emergency Patients Visit Dashboard",
      description: "Tableau dashboard analyzing emergency room data, providing insights into patient demographics, visit details, and satisfaction metrics.",
      image: "/assets/proj_3.png",
      tags: ["Tableau", "Data Visualization", "Healthcare Analytics"],
      githubUrl: "#",
      liveUrl: "#",
      details: [
        "Designed intuitive dashboard for hospital administrators",
        "Highlighted peak times and patient wait times",
        "Analyzed patient satisfaction correlation with various factors",
        "Created predictive model for patient volume forecasting"
      ]
    },
    {
      id: 4,
      title: "HR Attrition Dashboard",
      description: "Excel dashboard analyzing employee turnover, providing insights into attrition rates, demographics, and education-related patterns.",
      image: "/assets/proj_4.jfif",
      tags: ["Excel", "Pivot Tables", "Data Analysis"],
      githubUrl: "#",
      liveUrl: "#",
      details: [
        "Developed comprehensive HR metrics dashboard",
        "Identified key factors contributing to employee attrition",
        "Created predictive model for attrition risk",
        "Provided recommendations for retention strategies"
      ]
    },
    {
      id: 5,
      title: "SQL Data Analytics Projects",
      description: "SQL analysis of HR, Paytm, and Pharma datasets for business insights and marketing strategies.",
      image: "/assets/proj_5.jfif",
      tags: ["SQL", "Data Analysis", "Business Intelligence"],
      githubUrl: "#",
      liveUrl: "#",
      details: [
        "Analyzed employee data for HR insights and workforce planning",
        "Examined pharmaceutical sales for market trends and opportunities",
        "Evaluated Paytm e-purchase data for customer behavior analysis",
        "Developed complex queries for business intelligence reporting"
      ]
    }
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
            Here are some of my data analytics projects showcasing my skills in SQL, Python, Power BI, Tableau, and Excel.
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
            <div className="relative h-64 md:h-80 overflow-hidden">
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