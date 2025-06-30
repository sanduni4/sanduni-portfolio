import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Award } from "lucide-react"

export function Achievements() {
  const achievements = [
    {
      title: "Participant - RealHack 2024",
      organization: "Software Engineering Students' Association, University of Kelaniya",
      type: "participation",
    },
    {
      title: "Top 10 - Junior Hack 6.0, 2025",
      organization: "Software Engineering Students' Association, University of Kelaniya",
      type: "award",
    },
    {
      title: "Top 10 - Paramount 3.0, Mathematics Competition",
      organization: "Mathematics Students' Society, University of Kelaniya",
      type: "award",
    },
  ]

  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Achievements</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  {achievement.type === "award" ? (
                    <Trophy className="h-6 w-6 text-pink-500" />
                  ) : (
                    <Award className="h-6 w-6 text-purple-500" />
                  )}
                  <CardTitle className="text-lg font-bold text-gray-900">{achievement.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">{achievement.organization}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
