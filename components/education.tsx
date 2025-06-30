import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"

export function Education() {
  const education = [
    {
      institution: "University of Kelaniya",
      degree: "BSc. (Hons) Software Engineering",
      location: "Kelaniya, Sri Lanka",
      period: "July 2023 — Present",
      gpa: "3.32/4.00",
    },
    {
      institution: "IMBS Green Campus",
      degree: "Diploma in English",
      location: "Gampaha, Sri Lanka",
      period: "July 2023 — October 2024",
    },
    {
      institution: "Ananda Central College",
      degree: "Advanced Level",
      location: "Elpitiya, Galle",
      period: "2018 — 2021",
    },
  ]

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-20 bg-gradient-to-r from-pink-700 to-purple-600 h-1 mx-auto"></div>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="h-6 w-6 text-pink-700" />
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900">{edu.institution}</CardTitle>
                      <p className="text-lg text-purple-600 font-medium">{edu.degree}</p>
                      <p className="text-gray-600">{edu.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{edu.period}</span>
                  </div>
                </div>
              </CardHeader>
              {edu.gpa && (
                <CardContent>
                  <p className="text-gray-700">
                    <span className="font-semibold">GPA:</span> {edu.gpa}
                  </p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
