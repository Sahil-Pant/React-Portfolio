"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Eye, Filter } from "lucide-react"

const projects = [
  {
    title: "Netflix Homepage Replica",
    description:
      "A pixel-perfect recreation of Netflix's homepage using only HTML, CSS, and JavaScript. Features responsive design, smooth animations, and authentic styling that mirrors the original Netflix interface.",
    subtitle: "Netflix Homepage",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    image: "/images/netflix-clone.png",
    category: "Web Application",
    year: "2024",
    status: "Completed",
    featured: true,
    liveUrl: "https://sahil-pant.github.io/netflix-homepage-replica/",
    githubUrl: "https://github.com/Sahil-Pant/netflix-homepage-replica",
  },


  {
    title: "GSAP-powered Portfolio",
    description:
      "A dynamic portfolio website showcasing my projects, skills, and experience. Built with HTML, CSS, and JavaScript, featuring smooth GSAP animations and interactive elements for an engaging user experience.",
    subtitle: "Personal Portfolio Website",
    technologies: ["HTML5", "CSS3", "JavaScript", "GSAP", "Animation"],
    image: "/images/portfolio.png",
    category: "Portfolio",
    year: "2024",
    status: "Completed",
    featured: true,
    liveUrl: "https://sahil-pant.github.io/My-Portfolio/",
    githubUrl: "https://github.com/Sahil-Pant/My-Portfolio",
  },
  {
    title: "Spotify Homepage Clone",
    description:
    "A static recreation of Spotify's front page using HTML and CSS. Focuses on pixel-perfect design implementation without search or playback features, demonstrating strong CSS skills and attention to detail.",
    subtitle: "Spotify Homepage UI",
    technologies: ["HTML5", "CSS3", "Responsive Design", "Flexbox"],
    image: "/images/spotify-clone.png",
    category: "Web Application",
    year: "2024",
    status: "Completed",
    featured: true,
    liveUrl: "https://sahil-pant.github.io/Spotify-Clone_Homepage/",
    githubUrl: "https://github.com/Sahil-Pant/Spotify-Clone_Homepage",
  },
  {
    title: "Bhaichaara Cafe Website",
    description:
    "A warm and inviting coffee shop website featuring beautiful imagery, smooth animations, and an intuitive user experience. Created with main sections and styled design without dynamic functionality.",
    subtitle: "Restaurant Website Design",
    technologies: ["HTML5", "CSS3", "JavaScript", "Animation"],
    image: "/images/cafe-website.png",
    category: "Business Website",
    year: "2024",
    status: "Completed",
    featured: false,
    liveUrl: "https://sahil-pant.github.io/Cafe-Website/",
    githubUrl: "https://github.com/Sahil-Pant/Cafe-Website",
  },

  {
    title: "Personal Portfolio",
    description:
      "A dynamic portfolio website showcasing my projects, skills, and experience. Built with react.js ,next.js, featuring smooth GSAP animations and interactive elements for an engaging user experience.",
    subtitle: "Personal Portfolio Website",
    technologies: ["React.js", "Next.js", "GSAP", "Animation"],
    image: "/images/portfolio2.png",
    category: "Portfolio",
    year: "2025",
    status: "Completed",
    featured: true,
    liveUrl: "https://portfolio-chi-ashen-cb6kffz2kd.vercel.app/",
    githubUrl: "https://github.com/Sahil-Pant/React-Portfolio",
  },

  

  {
    title: "JNU Web Application",
    description:
      "Responsive web application developed during my internship at Jawaharlal Nehru University using HTML, CSS, JavaScript, and Python Flask. Focused on performance optimization and user experience enhancement.",
    subtitle: "University Web Application",
    technologies: ["HTML5", "CSS3", "JavaScript", "Python", "Flask"],
    image: "/images/tribe.png",
    category: "Web Application",
    year: "2025",
    status: "Completed",
    featured: true,
    liveUrl: "https://tribe.org.in/",
    githubUrl: "",
  },


  {
    title: "NoCapTask",
    description:
      "NoCapTask",
    subtitle: "Project management Web Application",
    technologies: ["React.js", "Next.js", "Hono.js"],
    image: "/images/NCT.png",
    category: "Web Application",
    year: "2025",
    status: "In Progress",
    featured: false,
    liveUrl: "",
    githubUrl: "",
  },
]

const categories = ["All", "Web Application", "Business Website","Task", "Portfolio"]
const technologies = ["All", "HTML5", "CSS3", "JavaScript", "Python","React.js","Next.js","Hono.js", "Flask", "GSAP"]

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedTechnology, setSelectedTechnology] = useState("All")
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false)

  const filteredProjects = projects.filter((project) => {
    const categoryMatch = selectedCategory === "All" || project.category === selectedCategory
    const technologyMatch = selectedTechnology === "All" || project.technologies.includes(selectedTechnology)
    const featuredMatch = !showFeaturedOnly || project.featured

    return categoryMatch && technologyMatch && featuredMatch
  })

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-4xl md:text-6xl font-bold text-foreground mb-6"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Projects
              </span>
            </motion.h2>
            <motion.p
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              A showcase of my latest work, featuring innovative solutions and creative implementations
            </motion.p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex flex-wrap gap-4 justify-center items-center mb-6">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">Filter by:</span>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="text-sm text-muted-foreground mr-2">Category:</span>
                {categories.map((category) => (
                  <motion.div key={category} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className={
                        selectedCategory === category
                          ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white"
                          : "border-border text-muted-foreground hover:text-foreground"
                      }
                    >
                      {category}
                    </Button>
                  </motion.div>
                ))}
              </div>

              {/* Technology Filter */}
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="text-sm text-muted-foreground mr-2">Tech:</span>
                {technologies.map((tech) => (
                  <motion.div key={tech} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant={selectedTechnology === tech ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedTechnology(tech)}
                      className={
                        selectedTechnology === tech
                          ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white"
                          : "border-border text-muted-foreground hover:text-foreground"
                      }
                    >
                      {tech}
                    </Button>
                  </motion.div>
                ))}
              </div>

              {/* Featured Toggle */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant={showFeaturedOnly ? "default" : "outline"}
                  size="sm"
                  onClick={() => setShowFeaturedOnly(!showFeaturedOnly)}
                  className={
                    showFeaturedOnly
                      ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white"
                      : "border-border text-muted-foreground hover:text-foreground"
                  }
                >
                  ⭐ Featured Only
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${project.title}-${selectedCategory}-${selectedTechnology}`}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full bg-card border-border hover:border-cyan-500/40 transition-all duration-500 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                        {project.liveUrl && (
                          <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.2 }}>
                            <Button
                              size="sm"
                              className="bg-cyan-500 hover:bg-cyan-600 text-white"
                              onClick={() => window.open(project.liveUrl, "_blank")}
                            >
                              <Eye className="h-4 w-4 mr-1" />
                              Live Demo
                            </Button>
                          </motion.div>
                        )}
                        {project.githubUrl && (
                          <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.3 }}>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-border text-foreground hover:bg-muted"
                              onClick={() => window.open(project.githubUrl, "_blank")}
                            >
                              <Github className="h-4 w-4 mr-1" />
                              Code
                            </Button>
                          </motion.div>
                        )}
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge
                        className={
                          project.status === "Completed"
                            ? "bg-green-500/20 text-green-400 border-green-500/30"
                            : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                        }
                      >
                        {project.status}
                      </Badge>
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">⭐ Featured</Badge>
                      </div>
                    )}

                    {/* Category Badge */}
                    <div className={`absolute ${project.featured ? "top-12" : "top-4"} left-4`}>
                      <Badge variant="secondary" className="bg-muted text-muted-foreground">
                        {project.category}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <motion.h3
                        className="text-xl font-bold text-foreground group-hover:text-cyan-400 transition-colors"
                        whileHover={{ scale: 1.02 }}
                      >
                        {project.title}
                      </motion.h3>
                      <div className="flex items-center gap-2">
                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-cyan-400 transition-colors" />
                        <span className="text-sm text-muted-foreground">{project.year}</span>
                      </div>
                    </div>

                    <h4 className="text-lg font-semibold text-purple-400 mb-3">{project.subtitle}</h4>

                    <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.1, duration: 0.3 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Badge
                            variant="secondary"
                            className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border-cyan-500/30 text-xs hover:from-cyan-500/30 hover:to-purple-500/30 transition-all duration-300"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div className="flex gap-2" whileHover={{ scale: 1.02 }}>
                      {project.liveUrl ? (
                        <Button
                          size="sm"
                          className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white"
                          onClick={() => window.open(project.liveUrl, "_blank")}
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          View Live
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          className="flex-1 bg-gradient-to-r from-gray-500 to-gray-600 text-white cursor-not-allowed"
                          disabled
                        >
                          Coming Soon
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-border text-foreground hover:bg-muted"
                          onClick={() => window.open(project.githubUrl, "_blank")}
                        >
                          <Github className="h-4 w-4" />
                        </Button>
                      )}
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-12">
              <p className="text-muted-foreground text-lg">No projects found matching your filters.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedCategory("All")
                  setSelectedTechnology("All")
                  setShowFeaturedOnly(false)
                }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-muted px-8 py-3"
              onClick={() => window.open("https://github.com/Sahil-Pant", "_blank")}
            >
              View All Projects on GitHub
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
