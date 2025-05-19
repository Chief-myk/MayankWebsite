const Certifications = () => {
  const certifications = [
    { name:  "Software Engineering ", issuer: 'LinkedIn', date: 'May 2024' },
    { name: "App Development (React Native)", issuer: 'Coding Ninja', date: 'July 2024' },
    { name:  "Web Development (MERN Stack) ", issuer: 'CodeWithHarry', date: 'September 2024' },
    { name:  "DevOps Engineering " , issuer: 'Google', date: 'December 2024' },     
  ]

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          <span className="text-gray-900 dark:text-white">My </span>
          <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
            Certifications
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                {cert.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-1">
                <span className="font-semibold">Issuer:</span> {cert.issuer}
              </p>
              <p className="text-gray-500 dark:text-gray-500 text-sm">
                {cert.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Certifications