"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, FileText, Download } from "lucide-react"

export function Hero() {
  const handleDownloadCV = () => {
    // Create a downloadable CV content
    const cvContent = `SANDUNI AYESHIKA
Software Engineering Undergraduate
+94769991200 | sanduniayeshika4@gmail.com | linkedin.com | medium.com | github.com

Summary
Passionate Software Engineering undergraduate with a solid foundation in web development, object oriented programming, and software design principles. With strong problem solving, teamwork, and leadership abilities, I eager to contribute to dynamic development teams and gain practical industry experience as a software engineering intern.

Education
University of Kelaniya - Kelaniya, Sri Lanka
BSc. (Hons) Software Engineering - July 2023 – Present
GPA: 3.32/4.00

IMBS Green Campus - Gampaha, Sri Lanka
Diploma in English - July 2023 – October 2024

Ananda Central College - Elpitiya, Galle
Advanced Level - 2018 – 2021

Technical Skills
Frontend: HTML, CSS, Tailwind CSS, JavaScript, React.js, React Native
Backend: Node.js, Express.js
Database: MySQL, MongoDB
Tools: GitHub (Git), Jira, Power BI, Postman, Figma

Contact Information
Email: sanduniayeshika4@gmail.com
Phone: +94769991200
LinkedIn: https://www.linkedin.com/in/sanduni-ayeshika-339528290
GitHub: https://github.com/sanduni4
Medium: https://medium.com/@sanduniayeshika4`

    const blob = new Blob([cvContent], { type: "text/plain" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "Sanduni_Ayeshika_CV.txt"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-50 to-rose-100"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">SANDUNI AYESHIKA</h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">Software Engineering Undergraduate</p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Passionate about creating innovative solutions through code. Eager to contribute to dynamic development
            teams and gain practical industry experience.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button
            asChild
            className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white"
          >
            <a href="#projects">View My Work</a>
          </Button>
          <Button variant="outline" asChild className="border-gray-300 text-gray-700 hover:bg-white/50 bg-white/30">
            <a href="#contact">Get In Touch</a>
          </Button>
          <Button
            onClick={handleDownloadCV}
            variant="outline"
            className="border-pink-300 text-pink-700 hover:bg-pink-50 bg-white/30"
          >
            <Download className="h-4 w-4 mr-2" />
            Download CV
          </Button>
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/sanduni4"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-pink-600 transition-colors duration-300"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/sanduni-ayeshika-339528290"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-pink-600 transition-colors duration-300"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="https://medium.com/@sanduniayeshika4"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-pink-600 transition-colors duration-300"
          >
            <FileText className="h-6 w-6" />
          </a>
          <a
            href="mailto:sanduniayeshika4@gmail.com"
            className="text-gray-600 hover:text-pink-600 transition-colors duration-300"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
