"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, TrendingUp, Palette, Video, Headphones, Gamepad2, Figma, Server, ArrowRight } from "lucide-react"

const services = [
  {
    title: "Web Development",
    icon: Code,
    description: "Building modern, responsive websites and web applications with cutting-edge technologies",
    features: ["HTML5 & CSS3", "JavaScript & Python", "Responsive Design", "Performance Optimization"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Frontend Development",
    icon: Palette,
    description: "Creating beautiful and interactive user interfaces with modern frameworks and libraries",
    features: ["React.js", "GSAP Animations", "UI/UX Design", "Cross-browser Compatibility"],
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Python Development",
    icon: Server,
    description: "Backend development and web applications using Python and Flask framework",
    features: ["Flask Applications", "API Development", "Database Integration", "Server-side Logic"],
    color: "from-teal-500 to-cyan-500",
  },
  {
    title: "UI/UX Design",
    icon: Figma,
    description: "User-centered design solutions for digital products that prioritize usability and aesthetics",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    color: "from-indigo-500 to-purple-500",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 relative">
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
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Services
              </span>
            </motion.h2>
            <motion.p
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Comprehensive digital solutions tailored to bring your vision to life with cutting-edge technology and
              creative excellence
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group"
                >
                  <Card className="h-full bg-card border-border backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300 overflow-hidden">
                    <CardContent className="p-6 h-full flex flex-col">
                      <div className="mb-4">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300`}
                        >
                          <IconComponent className="h-8 w-8 text-white" />
                        </motion.div>
                        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-cyan-400 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
                      </div>

                      <div className="flex-1">
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, featureIndex) => (
                            <motion.li
                              key={featureIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 + featureIndex * 0.1, duration: 0.4 }}
                              viewport={{ once: true }}
                              className="text-muted-foreground text-xs flex items-center gap-2"
                            >
                              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                              {feature}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/50 group-hover:bg-gradient-to-r group-hover:from-cyan-500/10 group-hover:to-purple-500/10"
                        >
                          Learn More
                          <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
