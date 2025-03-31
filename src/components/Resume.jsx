import { motion } from 'framer-motion'
import { FiDownload } from 'react-icons/fi'

const Resume = () => {
  const experiences = [
    {
      period: '2022-2024',
      role: 'Benefit Analyst',
      company: 'Carelon Global Solutions',
      description: 'Carelon Global Solutions, part of Elevance Health, provides innovative healthcare solutions to improve patient care and operational efficiency.',
      points: [
        'Validated healthcare policy benefits for accuracy and compliance using SharePoint documents.',
        'Produced error and weekly reports on mismatch benefits using SQL, Excel, and SharePoint, while maintaining data integrity.',
        'Identified and resolved issues, managed Jira tickets, and collaborated with onshore teams for efficient problem resolution.'
      ]
    },
    {
      period: '2021-2022',
      role: 'Claim Associate',
      company: 'Optum',
      description: 'Optum, a part of UnitedHealth Group, delivers integrated healthcare solutions to enhance patient care and operational efficiency.',
      points: [
        'Provided comprehensive OJT support from initial training through production, managing and adjusting claims, including rework and appeals.',
        'Handled various tasks in the CRT Project and addressed issues with underpaid or overpaid claims.',
        'Processed both new and corrected claims, ensuring accurate and efficient resolution.'
      ]
    }
  ]

  const educations = [
    {
      period: '2017-2020',
      degree: 'Bachelor of Science',
      institution: 'Swami Vivekanand Subharti University',
      grade: 'First class distinction'
    },
    {
      period: '2014-2016',
      degree: 'Higher Secondary School',
      institution: 'Holy Trinity Church School',
      grade: 'First class distinction'
    }
  ]

  const skills = [
    { name: 'SQL', level: 90 },
    { name: 'Python', level: 80 },
    { name: 'Power BI', level: 85 },
    { name: 'Tableau', level: 75 },
    { name: 'Excel', level: 90 },
    { name: 'Statistics', level: 80 },
    { name: 'Data Modeling', level: 75 },
    { name: 'Machine Learning', level: 65 }
  ]

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-900/50">
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
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">Resume</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Seasoned Data Analyst with 3 years of experience in Healthcare Benefits Analysis and a strong track record
            of driving business strategies through data-driven insights.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mr-4">Experience</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-orange-500 to-yellow-500"></div>
              </div>

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                      <span className="text-orange-500 font-medium">{exp.period}</span>
                      <span className="text-sm bg-orange-500/10 text-orange-500 px-3 py-1 rounded-full">
                        {exp.company}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{exp.role}</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-orange-500 mr-2">•</span>
                          <span className="text-gray-700 dark:text-gray-300">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mr-4">Education</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-orange-500 to-yellow-500"></div>
              </div>

              <div className="space-y-8">
                {educations.map((edu, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                      <span className="text-orange-500 font-medium">{edu.period}</span>
                      <span className="text-sm bg-orange-500/10 text-orange-500 px-3 py-1 rounded-full">
                        {edu.institution}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{edu.degree}</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Grade:</span> {edu.grade}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mr-4">Skills</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-orange-500 to-yellow-500"></div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-900 dark:text-white font-medium">{skill.name}</span>
                        <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-orange-500 to-yellow-500 h-2 rounded-full" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full font-medium shadow-lg hover:shadow-orange-500/30 transition-all"
          >
            <FiDownload className="mr-2" /> Download Full Resume
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Resume