"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Award,
  Coffee,
  GraduationCap,
  Briefcase,
  Code,
  Download,
  ExternalLink,
  Calendar,
  MapPin,
  Mail,
  Phone,
} from "lucide-react"

const skills = [
  { name: "HTML5", level: 95, category: "Frontend" },
  { name: "CSS3", level: 90, category: "Frontend" },
  { name: "JavaScript", level: 85, category: "Frontend" },
  { name: "Python", level: 80, category: "Backend" },
  { name: "Flask", level: 75, category: "Backend" },
  { name: "React.js", level: 70, category: "Frontend" },
  { name: "GSAP", level: 85, category: "Animation" },
  { name: "UI/UX Design", level: 80, category: "Design" },
]

const stats = [
  {
    icon: GraduationCap,
    label: "Education",
    value: "BCA Student",
    description: "Final Year",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Briefcase,
    label: "Experience",
    value: "Frontend Intern",
    description: "JNU",
    color: "from-purple-500 to-pink-500",
  },
  { icon: Award, label: "Projects", value: "5+", description: "Completed", color: "from-green-500 to-emerald-500" },

]

const achievements = [
  {
    title: "Frontend Development Internship",
    organization: "Jawaharlal Nehru University",
    date: "01/2025 - 06/2025",
    description: "Developing responsive web applications using modern technologies",
    icon: Briefcase,
  },
  {
    title: "Web Development Projects",
    organization: "Personal Portfolio",
    date: "2024",
    description: "Created multiple web applications and clones",
    icon: Code,
  },
  {
    title: "BCA Final Year",
    organization: "Computer Applications",
    date: "2022 - 2025",
    description: "Specializing in web development",
    icon: GraduationCap,
  },
]

const personalInfo = [
  { icon: Calendar, label: "Age", value: "21 years" },
  { icon: MapPin, label: "Location", value: "Faridabad, Haryana" },
  { icon: Mail, label: "Email", value: "sahil111pant@gmail.com" },
]

export function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
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
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Me</span>
            </motion.h2>
            <motion.p
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Passionate about creating digital experiences that make a difference
            </motion.p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <Card className="glass border-border/50 backdrop-blur-xl">
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <motion.div whileHover={{ scale: 1.05 }} className="relative">
                      <Avatar className="w-32 h-32 border-4 border-gradient-to-r from-cyan-400 to-purple-400">
                        <AvatarImage src="/images/sahil-profile.jpg" alt="Sahil Pant" />
                        <AvatarFallback className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 text-white">
                          SP
                        </AvatarFallback>
                      </Avatar>
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-background flex items-center justify-center"
                      >
                        <div className="w-3 h-3 bg-white rounded-full" />
                      </motion.div>
                    </motion.div>

                    <div className="flex-1">
                      <CardTitle className="text-2xl md:text-3xl font-bold text-foreground mb-2">Sahil Pant</CardTitle>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border-cyan-500/30">
                          Frontend Developer
                        </Badge>
                        <Badge className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-500/30">
                          BCA Student
                        </Badge>
                        <Badge className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border-green-500/30">
                          Available for Work
                        </Badge>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        {personalInfo.map((info, index) => {
                          const IconComponent = info.icon
                          return (
                            <div key={index} className="flex items-center gap-2">
                              <IconComponent className="h-4 w-4 text-cyan-400" />
                              <span>{info.value}</span>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <motion.p
                    className="text-muted-foreground leading-relaxed text-base"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                     I am a Bachelor of Computer Applications (BCA) graduate passionate about web development and programming. While my
                    academic record is modest, I’ve built strong practical skills through projects, internships, and self-learning..
                  </motion.p>

                  <motion.p
                    className="text-muted-foreground leading-relaxed text-base"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    Proficient in HTML, CSS, JavaScript, C, Java, and Python, I focus on creating responsive, user-friendly web interfaces. Currently
                    expanding my expertise in React.js and Node.js to strengthen my full-stack development capabilities. Driven by innovation and
                    problem-solving, I aim to build impactful, real-world web solutions.
                  </motion.p>

                  <Separator className="bg-border/50" />

                  <div className="flex flex-wrap gap-3">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white"
                        onClick={() => {
                          const link = document.createElement("a")
                          link.href = "/resume.pdf"
                          link.download = "Sahil_Pant_Resume.pdf"
                          link.click()
                        }}
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download CV
                      </Button>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="outline"
                        className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
                        onClick={() => window.open("https://github.com/Sahil-Pant", "_blank")}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View GitHub
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <Card className="glass border-border/50 backdrop-blur-xl hover:border-cyan-500/40 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center`}
                          >
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                            <p className="text-sm text-muted-foreground">{stat.label}</p>
                            <p className="text-xs text-cyan-400">{stat.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Card className="glass border-border/50 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <Code className="h-6 w-6 text-cyan-400" />
                  Skills & Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="text-xs">
                            {skill.category}
                          </Badge>
                          <span className="text-cyan-400 text-sm font-semibold">{skill.level}%</span>
                        </div>
                      </div>
                      <Progress value={skill.level} className="h-2 bg-muted" />
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Achievements Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass border-border/50 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <Award className="h-6 w-6 text-purple-400" />
                  Experience & Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {achievements.map((achievement, index) => {
                    const IconComponent = achievement.icon
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="flex gap-4 p-4 rounded-lg border border-border/50 hover:border-cyan-500/40 transition-all duration-300 hover:bg-cyan-500/5"
                      >
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-cyan-400" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-foreground font-semibold mb-1">{achievement.title}</h4>
                          <p className="text-purple-400 text-sm mb-2">{achievement.organization}</p>
                          <p className="text-muted-foreground text-sm mb-2">{achievement.description}</p>
                          <Badge variant="outline" className="text-xs border-cyan-500/30 text-cyan-400">
                            {achievement.date}
                          </Badge>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
