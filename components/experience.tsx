import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Calendar, Users } from "lucide-react"

export function Experience() {
  const workExperience = [
    {
      title: "Assistant English Teacher",
      company: "The Ceylon Kingdom English Academy",
      location: "Elpitiya, Galle",
      period: "Oct 2022 — June 2024",
      type: "work",
    },
  ]

  const volunteerExperience = [
    {
      title: "Editor, FEMINA Project",
      company: "Leo Club, University of Kelaniya",
      period: "2024 — 2025",
      type: "volunteer",
    },
    {
      title: "Leadership Training Officer",
      company: "Saviya Youth Foundation, The Ceylon Kingdom English Academy",
      period: "2022 — 2024",
      type: "volunteer",
    },
    {
      title: "Volunteer",
      company: "Sasnaka Sansadaya Foundation, Galle",
      period: "2022 — 2023",
      type: "volunteer",
    },
  ]

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="w-20 bg-gradient-to-r from-pink-500 to-purple-500 h-1 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Briefcase className="h-6 w-6 mr-2 text-pink-500" />
              Work Experience
            </h3>
            <div className="space-y-6">
              {workExperience.map((exp, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">{exp.title}</CardTitle>
                    <p className="text-lg text-purple-600 font-medium">{exp.company}</p>
                    <p className="text-gray-600">{exp.location}</p>
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Users className="h-6 w-6 mr-2 text-pink-500" />
              Volunteer Experience
            </h3>
            <div className="space-y-6">
              {volunteerExperience.map((exp, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-gray-900">{exp.title}</CardTitle>
                    <p className="text-purple-600 font-medium">{exp.company}</p>
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
