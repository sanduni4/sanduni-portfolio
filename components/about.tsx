export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-700 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <img
                src="/images/sanduni-professional.jpg"
                alt="Sanduni Ayeshika - Professional Photo"
                className="w-60 h-80 object-cover rounded-2xl shadow-lg mx-auto"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-pink-700 via-purple-600 to-purple-700 rounded-full opacity-20"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-pink-600 to-purple-500 rounded-full opacity-30"></div>
            </div>
          </div>

          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Passionate Software Engineering undergraduate with a solid foundation in web development, object-oriented
              programming, and software design principles.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              With strong problem-solving, teamwork, and leadership abilities, I am eager to contribute to dynamic
              development teams and gain practical industry experience as a software engineering intern.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Languages</h3>
                <p className="text-gray-700">English — Professional</p>
                <p className="text-gray-700">Sinhala — Native</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-700">Sri Lanka</p>
                <p className="text-gray-700">+94 769 991 200</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
