"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Download, Sparkles, Code, Palette, Star, Zap, Rocket, Heart } from "lucide-react"
import { useRef } from "react"

export function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const highlights = [
    { icon: Code, text: "5+ Projects", color: "from-cyan-400 to-blue-500" },
    { icon: Star, text: "Frontend Expert", color: "from-purple-400 to-pink-500" },
    { icon: Zap, text: "Fast Delivery", color: "from-green-400 to-emerald-500" },
  ]

  const floatingElements = [
    { icon: Rocket, delay: 0, duration: 6, color: "text-cyan-400" },
    { icon: Heart, delay: 2, duration: 8, color: "text-pink-400" },
    { icon: Sparkles, delay: 4, duration: 7, color: "text-yellow-400" },
  ]

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with Parallax */}
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            rotate: [360, 180, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-blue-400/15 to-cyan-400/15 rounded-full blur-2xl"
        />

        {/* Floating Elements */}
        {floatingElements.map((element, index) => {
          const IconComponent = element.icon
          return (
            <motion.div
              key={index}
              animate={{
                y: [0, -30, 0],
                x: [0, 20, 0],
                rotate: [0, 360],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: element.duration,
                repeat: Number.POSITIVE_INFINITY,
                delay: element.delay,
                ease: "easeInOut",
              }}
              className={`absolute ${index === 0 ? "top-20 right-20" : index === 1 ? "bottom-32 left-20" : "top-1/2 right-10"}`}
            >
              <IconComponent className={`h-8 w-8 ${element.color}`} />
            </motion.div>
          )
        })}
      </motion.div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
                  className="inline-flex items-center gap-3 glass px-6 py-3 rounded-full border border-cyan-500/30 mb-8 relative overflow-hidden"
                >
                  <motion.div
                    animate={{
                      background: [
                        "linear-gradient(45deg, rgba(6, 182, 212, 0.1), rgba(147, 51, 234, 0.1))",
                        "linear-gradient(45deg, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1))",
                        "linear-gradient(45deg, rgba(236, 72, 153, 0.1), rgba(6, 182, 212, 0.1))",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                    className="absolute inset-0"
                  />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <Sparkles className="h-5 w-5 text-cyan-400" />
                  </motion.div>
                  <span className="text-sm text-foreground font-medium relative z-10">Available for new projects</span>
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    className="w-3 h-3 bg-green-400 rounded-full relative z-10"
                  />
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
                >
                  <motion.span
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                    className="bg-gradient-to-r from-foreground via-cyan-400 to-foreground bg-[length:200%_100%] bg-clip-text"
                  >
                    Frontend
                  </motion.span>
                  <br />
                  <motion.span
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-[length:200%_100%]"
                  >
                    Developer
                  </motion.span>
                  <br />
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="text-2xl md:text-4xl lg:text-5xl text-muted-foreground"
                  >
                    & Creative Mind
                  </motion.span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                >
                  Crafting digital experiences that merge creativity with innovation, building seamless, impactful, and future-ready web solutions—one line of code at a time.
                </motion.p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8"
              >
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="relative group">
                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(6, 182, 212, 0.3)",
                        "0 0 40px rgba(147, 51, 234, 0.4)",
                        "0 0 20px rgba(6, 182, 212, 0.3)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    className="absolute inset-0 rounded-lg"
                  />
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-4 text-lg shadow-lg transition-all duration-300 relative z-10"
                    onClick={() => scrollToSection("projects")}
                  >
                    <Code className="mr-2 h-5 w-5" />
                    Explore My Work
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.div>
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500 px-8 py-4 text-lg backdrop-blur-sm transition-all duration-300 bg-transparent"
                    onClick={() => scrollToSection("services")}
                  >
                    <Palette className="mr-2 h-5 w-5" />
                    View Services
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="ghost"
                    size="lg"
                    className="text-muted-foreground hover:text-foreground hover:bg-white/5 px-8 py-4 text-lg backdrop-blur-sm transition-all duration-300"
                    onClick={() => {
                      const link = document.createElement("a")
                      link.href = "/resume.pdf"
                      link.download = "Sahil_Pant_Resume.pdf"
                      link.click()
                    }}
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download CV
                  </Button>
                </motion.div>
              </motion.div>

              {/* Enhanced Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                {highlights.map((highlight, index) => {
                  const IconComponent = highlight.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.2 + index * 0.1, duration: 0.5, type: "spring" }}
                      whileHover={{ scale: 1.05, y: -2, rotateY: 5 }}
                      className="group"
                    >
                      <Card className="glass border-border/50 backdrop-blur-xl relative overflow-hidden">
                        <motion.div
                          animate={{
                            background: [
                              "linear-gradient(45deg, rgba(6, 182, 212, 0.05), rgba(147, 51, 234, 0.05))",
                              "linear-gradient(45deg, rgba(147, 51, 234, 0.05), rgba(236, 72, 153, 0.05))",
                              "linear-gradient(45deg, rgba(236, 72, 153, 0.05), rgba(6, 182, 212, 0.05))",
                            ],
                          }}
                          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                          className="absolute inset-0"
                        />
                        <CardContent className="p-4 flex items-center gap-3 relative z-10">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            className={`w-8 h-8 bg-gradient-to-r ${highlight.color} rounded-lg flex items-center justify-center`}
                          >
                            <IconComponent className="h-4 w-4 text-white" />
                          </motion.div>
                          <span className="text-sm font-medium text-foreground">{highlight.text}</span>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )
                })}
              </motion.div>
            </div>

            {/* Enhanced Right Content - Simplified */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="relative"
            >
              <div className="relative"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
