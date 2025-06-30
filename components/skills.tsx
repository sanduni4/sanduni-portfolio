import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Skills() {
  const technicalSkills = {
    Frontend: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React.js", "React Native"],
    Backend: ["Node.js", "Express.js"],
    Database: ["MySQL", "MongoDB"],
    Tools: ["GitHub (Git)", "Jira", "Power BI", "Postman", "Figma"],
    "Other Technologies": ["MERN Stack", "REST APIs", "JSON", "JWT", "Axios"],
  }

  const softSkills = [
    "Strategic Time Management",
    "Collaborative Leadership",
    "Innovative Problem-Solving",
    "Adaptive Communication",
    "Creative Decision-Making",
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills</h2>
          <div className="w-20 bg-gradient-to-r from-pink-500 to-purple-500 h-1 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {Object.entries(technicalSkills).map(([category, skills]) => (
                <div key={category}>
                  <h3 className="font-semibold text-gray-900 mb-3">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-gradient-to-r from-pink-100 to-purple-100 text-pink-800"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">Soft Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {softSkills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
