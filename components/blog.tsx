import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ExternalLink, BookOpen, Clock, Heart } from "lucide-react"

export function Blog() {
  const blogPosts = [
    {
      title: "Create full stack web site... 03",
      subtitle: "Password Hashing in the Database",
      excerpt:
        "Learn how to implement secure password hashing in your full-stack web application. This article covers best practices for storing user passwords safely in the database using modern hashing techniques.",
      date: "June 16, 2024",
      readTime: "8 min read",
      claps: "5",
      tags: ["Full Stack", "Security", "Database", "Password Hashing"],
      url: "https://medium.com/@sanduniayeshika4",
      featured: true,
    },
    {
      title: "Create full stack web site... 02",
      subtitle: "Install libraries",
      excerpt:
        "Step-by-step guide to installing and configuring essential libraries for your full-stack web development project. Learn about package management and dependency setup.",
      date: "June 14, 2024",
      readTime: "6 min read",
      tags: ["Full Stack", "Libraries", "Setup", "Development"],
      url: "https://medium.com/@sanduniayeshika4",
      featured: false,
    },
    {
      title: "Create full stack web site... 01",
      subtitle: "Frontend Development",
      excerpt:
        "Beginning your full-stack journey with frontend development. This first part covers the essential frontend technologies and setup required for modern web applications.",
      date: "June 9, 2024",
      readTime: "10 min read",
      tags: ["Full Stack", "Frontend", "Web Development", "JavaScript"],
      url: "https://medium.com/@sanduniayeshika4",
      featured: false,
    },
    {
      title: "Object Oriented Programming",
      subtitle: "Java Classes and Main Method",
      excerpt:
        "We write code in classes. Java program is running meaning run only main class. Understanding the fundamentals of object-oriented programming concepts in Java development.",
      date: "June 8, 2024",
      readTime: "7 min read",
      claps: "2",
      tags: ["Java", "OOP", "Programming", "Classes"],
      url: "https://medium.com/@sanduniayeshika4",
      featured: false,
    },
    {
      title: "Mastering Core Data Structures: The Building Blocks of Algorithms",
      subtitle: "Foundation of Efficient Programming",
      excerpt:
        "Data structures are the foundation of efficient programming. Whether you're sorting data, searching through databases, or building complex algorithms, understanding core data structures is essential for every developer.",
      date: "May 2024",
      readTime: "12 min read",
      tags: ["Data Structures", "Algorithms", "Programming", "Computer Science"],
      url: "https://medium.com/@sanduniayeshika4",
      featured: false,
    },
  ]

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Blog & Articles</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            I love sharing my knowledge and experiences through writing. Here are some of my recent articles on Medium
            covering full-stack development, programming concepts, and technical tutorials.
          </p>
        </div>

        <div className="grid gap-8">
          {/* Featured Article */}
          {blogPosts
            .filter((post) => post.featured)
            .map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-pink-500">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge className="bg-gradient-to-r from-pink-500 to-purple-500 text-white">Featured</Badge>
                        <BookOpen className="h-4 w-4 text-pink-500" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-gray-900 mb-1">{post.title}</CardTitle>
                      <p className="text-lg text-purple-600 font-medium mb-2">{post.subtitle}</p>
                      <p className="text-gray-700 text-base leading-relaxed mb-4">{post.excerpt}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                    {post.claps && (
                      <div className="flex items-center space-x-1">
                        <Heart className="h-4 w-4 text-pink-500" />
                        <span>{post.claps} claps</span>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-purple-600 border-purple-200">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
                  >
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2"
                    >
                      <span>Read Article</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}

          {/* Regular Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts
              .filter((post) => !post.featured)
              .map((post, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                  <CardHeader className="flex-1">
                    <CardTitle className="text-lg font-bold text-gray-900 mb-1 line-clamp-2">{post.title}</CardTitle>
                    <p className="text-sm text-purple-600 font-medium mb-2">{post.subtitle}</p>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex flex-col gap-2 text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                        {post.claps && (
                          <div className="flex items-center space-x-1">
                            <Heart className="h-3 w-3 text-pink-500" />
                            <span>{post.claps}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs text-purple-600 border-purple-200">
                          {tag}
                        </Badge>
                      ))}
                      {post.tags.length > 2 && (
                        <Badge variant="outline" className="text-xs text-gray-500">
                          +{post.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                    <Button variant="outline" size="sm" asChild className="w-full bg-transparent">
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2"
                      >
                        <span>Read More</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        {/* View All Articles Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-pink-200 text-pink-600 hover:bg-pink-50 bg-transparent"
          >
            <a
              href="https://medium.com/@sanduniayeshika4"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <BookOpen className="h-5 w-5" />
              <span>View All Articles on Medium</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
