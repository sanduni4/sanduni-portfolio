import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Calendar, ExternalLink } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Website",
      period: "May 2025 - Present",
      type: "Individual Project",
      status: "In Progress",
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
      description:
        "Developing a full-stack E-Commerce website using the MERN stack, including user authentication, product management and responsive UI design. Worked on setting up backend APIs, connecting with MongoDB database, and designing frontend components in React.",
      github: "https://github.com/sanduni4/e-commerce-web-site",
      hasGithub: true,
    },
    {
      title: "Habit Tracker App",
      period: "May 2025 - April 2025",
      type: "Individual Project",
      technologies: ["React Native", "TypeScript"],
      description:
        "Developed a mobile Habit Tracker application using React Native CLI and TypeScript. Implemented local user authentication, habit creation, daily/weekly progress tracking with charts, and a calendar-based streak view. Utilized AsyncStorage for data persistence and React Navigation for seamless screen transitions.",
      github: "https://github.com/sanduni4/Habit-Tracker",
      hasGithub: true,
    },
    {
      title: "TodoApp",
      period: "April 2025",
      type: "Individual Project",
      technologies: ["React Native CLI", "Zustand", "AsyncStorage", "Material Design"],
      description:
        "A simple and elegant Todo App built with React Native CLI, following Material Design principles. Features include adding/deleting tasks, marking tasks as complete with visual strikethrough, and persistent local storage using AsyncStorage. Implemented custom Material Design styling and Zustand for lightweight state management. The app design strictly follows a Figma prototype for consistent UI/UX.",
      github: "https://github.com/sanduni4/TODO-APP",
      hasGithub: true,
    },
    {
      title: "Portfolio Project",
      period: "May 2025 - April 2025",
      type: "Individual Project",
      technologies: ["HTML", "CSS", "JavaScript"],
      description:
        "Developed and hosted a personal portfolio website featuring a creative homepage, about section, project showcase, and contact form. Utilized third-party libraries and deployed the site via GitHub Pages with version control managed through Git.",
      github: "https://github.com/sanduni4/portfolio.assinment",
      hasGithub: true,
    },
    {
      title: "Fuel Management System",
      period: "January 2025 - February 2025",
      type: "Group Project",
      technologies: ["React", "Spring Boot", "JWT", "Tailwind CSS"],
      description:
        "Developed a React and Spring Boot based fuel station management system. Implemented features for fuel stock management, transaction reporting, and role-based user authentication using JWT. Created a responsive, interactive frontend and integrated it with RESTful APIs.",
      github: "https://github.com/RavinduLaksara/fuel_managment_system",
      hasGithub: true,
    },
    {
      title: "Liquor Shop Project",
      period: "Oct 2024 -- Nov 2024",
      type: "Group Project",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      description:
        "Developed a role-based E-Commerce platform for liquor stores using HTML, CSS, JavaScript, PHP, and MySQL. Implemented customer, supplier, and admin dashboards with functionalities including product management, order tracking, supplier approvals, and financial reporting.",
      github: "https://github.com/RavinduLaksara/SpiritStore",
      hasGithub: true,
    },
    {
      title: "Interactive Design Project",
      period: "May 2024",
      type: "Individual Project",
      technologies: ["Figma", "UI/UX Design", "Interactive Prototyping", "User Experience"],
      description:
        "Created a comprehensive interactive design project using Figma, focusing on user experience and interface design principles. The project demonstrates proficiency in creating wireframes, interactive prototypes, and design systems. Features responsive design elements, user flow optimization, and modern UI components with attention to accessibility and usability standards.",
      figmaUrl:
        "https://www.figma.com/design/huAPJ5vB8iW2ZIJLIUWG7X/Interactive-Design-Project?node-id=0-1&p=f&t=QJn0DtehRS6aMNJC-0",
      hasGithub: false,
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 h-1 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow h-full">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl font-bold text-gray-900">{project.title}</CardTitle>
                  {project.status && (
                    <Badge variant="secondary" className="bg-pink-100 text-pink-800">
                      {project.status}
                    </Badge>
                  )}
                </div>
                <div className="flex items-center space-x-2 text-gray-500 mb-2">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{project.period}</span>
                </div>
                <p className="text-sm text-purple-600 font-medium">{project.type}</p>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-6">{project.description}</p>
                </div>
                <div className="flex space-x-3">
                  {project.hasGithub && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2"
                      >
                        <Github className="h-4 w-4" />
                        <span>Code</span>
                      </a>
                    </Button>
                  )}
                  {project.figmaUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="bg-gradient-to-r from-pink-50 to-purple-50 border-pink-200 text-pink-600 hover:bg-pink-100"
                    >
                      <a
                        href={project.figmaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>View Design</span>
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
