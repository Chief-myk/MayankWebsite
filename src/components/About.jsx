const About = () => {
  const skills = [
    { name: "JavaScript/Node.js", level: "85%" },
    { name: "React/React Native", level: "88%" },
    { name: "Java", level: "80%" },
    { name: "SQL", level: "85%" },
    { name: "MongoDB", level: "75%" },
    { name: "Python", level: "90%" },
    { name: "Docker", level: "70%" },
    { name: "Git & GitHub", level: "90%" },
  ]

  const details = [
    { label: 'Profile', value: 'Web & Mobile Developer', icon: '👨‍💻' },
    { label: 'Domain', value: 'IT Services, Healthcare, Defence', icon: '🌐' },
    { label: 'Education', value: 'B.Tech from GGSIPU University ', icon: '🎓' },
    { label: 'Language', value: 'English, Hindi', icon: '🗣️' },
    { label: 'Other Skills', value: 'Git, Postman, Threejs, Express', icon: '🛠️' },
    { label: 'Interest', value: 'Traveling, Music, Chess', icon: '♟️' },
  ]

  const stats = [
    { number: '15+', label: 'Projects Completed' },
    { number: '15+', label: 'Skills' },
    { number: '10+', label: 'Happy Clients' }
  ]

 const handleClick = () => {
window.open("https://www.linkedin.com/in/mayankmittal1311/", "_blank");
};


  return (
    <section id="about" className="scroll-mt-20"> {/* Added scroll-margin */}
      <div className="min-h-screen bg-gradient-to-br from-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-300 mb-4">
            About Me
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
           Full Stack Developer Merging Design, AI, and Real-World Impact
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Profile Card & Skills */}
          <div className="w-full lg:w-2/5 space-y-8">
            {/* Profile Card */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="relative">
                  <img 
                    src="/assets/mayank.jpeg" 
                    alt="Profile" 
                    className="h-40 w-40 object-cover rounded-xl border-2 border-orange-400/50 shadow-md"
                  />
                  <div className="absolute -bottom-3 -right-3 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    Open to Work
                  </div>
                </div>
                <div className="text-white space-y-2">
                  <h2 className="text-2xl font-bold">Mayank Mittal</h2>
                  <p className="text-orange-300">Web & Mobile Developer</p>
                  <p className="text-gray-300 text-sm">
                    <span className="font-medium">Aim:</span> To Become a Billionaire
                  </p>
                  <div className="flex gap-2 mt-2">
                    <span className="bg-orange-500/20 text-orange-300 text-xs px-1 py-1 rounded">Java</span>
                    <span className="bg-blue-500/20 text-blue-300 text-xs px-1 py-1 rounded">Python</span>
                    <span className="bg-purple-500/20 text-purple-300 text-xs px-1 py-1 rounded">MERN stack</span>
                    <span className="bg-[#ff4000] text-purple-300 text-xs px-1 py-1 rounded">React Native</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <span className="w-1 h-6 bg-orange-500 mr-2"></span>
                My Skills
              </h3>
              <div className="space-y-5">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-gray-200 mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-orange-300">{skill.level}</span>
                    </div>
                    <div className="bg-gray-800 rounded-full h-2.5">
                      <div 
                        className="h-2.5 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400" 
                        style={{ width: skill.level }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - About & Details */}
          <div className="w-full lg:w-3/5 space-y-8">
            {/* About Text */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="w-1 h-6 bg-orange-500 mr-2"></span>
                Professional Summary
              </h3>
              <p className="text-gray-300 leading-relaxed">
              Passionate Computer Science Engineering student at GGSIPU with a vision to revolutionize technology. Skilled in full-stack development, AI, IoT, and deep space simulations. Creator of projects like the JARVIS AI system, smart gesture-controlled interfaces, cost-effective MRI technology, and immersive 3D space experiences, reflecting a relentless drive to innovate and solve real-world challenges.
              </p>
            </div>

            {/* Details */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <span className="w-1 h-6 bg-orange-500 mr-2"></span>
                Personal Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {details.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-2xl mt-1">{item.icon}</span>
                    <div>
                      <h4 className="text-orange-300 font-medium">{item.label}</h4>
                      <p className="text-gray-300">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-500/20 to-yellow-500/10 rounded-2xl p-4 text-center border border-orange-500/20">
                  <p className="text-3xl font-bold text-orange-300">{stat.number}</p>
                  <p className="text-gray-300 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="flex-1 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white cursor-pointer font-bold py-3 px-6 rounded-xl transition-all hover:shadow-lg hover:scale-[1.02] flex items-center justify-center gap-2" onClick={handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </button>
              <button className="flex-1 border border-orange-500 text-orange-300 hover:bg-orange-500 hover:text-white font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default About