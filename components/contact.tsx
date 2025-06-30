import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Github, Linkedin, FileText } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-700 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to
            discuss potential projects or just say hello!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-pink-700" />
                <a
                  href="mailto:sanduniayeshika4@gmail.com"
                  className="text-gray-700 hover:text-pink-700 transition-colors"
                >
                  sanduniayeshika4@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-pink-700" />
                <span className="text-gray-700">+94 769 991 200</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">Connect With Me</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                <a
                  href="https://github.com/sanduni4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3"
                >
                  <Github className="h-5 w-5" />
                  <span>GitHub</span>
                </a>
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                <a
                  href="https://www.linkedin.com/in/sanduni-ayeshika-339528290"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </a>
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                <a
                  href="https://medium.com/@sanduniayeshika4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3"
                >
                  <FileText className="h-5 w-5" />
                  <span>Medium</span>
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            asChild
            className="bg-gradient-to-r from-pink-700 to-purple-600 hover:from-pink-800 hover:to-purple-700"
          >
            <a href="mailto:sanduniayeshika4@gmail.com">Send Me an Email</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
