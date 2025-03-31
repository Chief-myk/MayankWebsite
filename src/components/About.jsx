// About.jsx
const About = () => {
    const skills = [
      { name: 'SQL', level: '90%' },
      { name: 'PYTHON', level: '80%' },
      { name: 'Data Visualization', level: '90%' },
      { name: 'Statistical Analysis', level: '85%' },
      { name: 'Machine Learning', level: '60%' },
    ]
  
    const details = [
      { label: 'Profile:', value: 'Data Science & Analytics' },
      { label: 'Domain:', value: 'IT Services and IT Consulting, Hospital & Health Care, Digital Marketing' },
      { label: 'Education:', value: 'Bachelor of Science' },
      { label: 'Language:', value: 'English, Hindi' },
      { label: 'BI Tools:', value: 'Microsoft Power BI, Tableau' },
      { label: 'Other Skills:', value: 'Git, JIRA, Google Analytics, PowerPoint & Adv. Excel' },
      { label: 'Interest:', value: 'Traveling, Music, Chess' },
    ]
  
    return (
      <div className="flex flex-wrap justify-evenly mt-[20vh] px-4">
        <div className="max-w-[38vw] mt-[8vh]">
          <div className="flex flex-wrap justify-center items-center bg-white bg-opacity-10 p-6 rounded-lg">
            <div>
              <img 
                src="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Profile" 
                className="h-[25vh] object-cover rounded-lg"
              />
            </div>
            <div className="text-gray-900 ml-[2vw] text-lg">
              <div className="mb-[2vh]"><span className="text-orange-custom">Name:</span> Mayank Mittal</div>
              <div className="mb-[2vh]"><span className="text-orange-custom">Job Role:</span> Data Analyst</div>
              <div className="mb-[2vh]"><span className="text-orange-custom">Aim:</span> To Become a Data Science Leader</div>
              <div className="mb-[2vh]"><span className="text-orange-custom">Status:</span> Open to Opportunities</div>
            </div>
          </div>
          <div className="text-white text-2xl font-semibold mb-[3vh] mt-8">Skills</div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            {skills.map((skill, index) => (
              <div key={index} className="my-[20px]">
                <div className="flex justify-between text-gray-900 text-lg mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.level}</span>
                </div>
                <div className="bg-gray-800 rounded-xl h-[8px]">
                  <div 
                    className="h-[8px] bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg" 
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-[40vw]">
          <div className="text-white text-[50px] font-extrabold mb-[6vh]">About Me</div>
          <div className="text-gray-custom text-lg mb-[6vh] leading-relaxed">
            Data Analyst with expertise in Power BI, SQL, MS Excel, and Python, and a background in healthcare
            claims analysis. Skilled at transforming complex data into actionable insights and effectively
            presenting findings. I've led impactful projects and hold certifications in Data Analytics. Passionate
            about leveraging data to drive informed decisions and eager to contribute to innovative projects and
            teams.
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            {details.map((item, index) => (
              <div key={index} className="mb-[2vh]">
                <span className="font-bold text-orange-400">{item.label}</span> 
                <span className="text-gray-900"> {item.value}</span>
              </div>
            ))}
            <div className="flex items-center mt-8 mb-6">
              <span className="text-orange-500 text-[35px] font-bold mr-2">15+</span>
              <span className="text-gray-700 text-xl">Projects Completed</span>
            </div>
            <div className="flex gap-4">
              <button className="bg-gradient-to-r from-orange-500 to-yellow-500 px-[30px] py-[15px] rounded-[45px] text-sm font-bold cursor-pointer hover:scale-105 transition-transform">
                LinkedIn
              </button>
              <button className="border border-orange-500 text-orange-500 px-[30px] py-[15px] rounded-[45px] text-sm font-bold cursor-pointer hover:bg-orange-500 hover:text-white transition-colors">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}
  
export default About