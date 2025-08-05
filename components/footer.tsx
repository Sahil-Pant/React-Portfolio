"use client"

import { motion } from "framer-motion"
import { Code, Github, Mail, Heart, ExternalLink } from "lucide-react"

export function Footer() {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/sahil111pant",
      label: "GitHub",
      username: "@sahil111pant",
    },

    {
      icon: Mail,
      href: "mailto:sahil111pant@gmail.com",
      label: "Email",
      username: "sahil111pant@gmail.com",
    },
  ]

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="relative bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl flex items-center justify-center">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-foreground">Sahil Pant</span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
                Frontend Web Developer & BCA Student passionate about creating digital experiences. Currently interning
                at Jawaharlal Nehru University and building innovative web solutions.
              </p>

              {/* Social Links with usernames */}
              <div className="space-y-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, x: 5 }}
                      className="group"
                    >
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300"
                      >
                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                          <IconComponent className="h-4 w-4 text-cyan-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground group-hover:text-cyan-400 transition-colors">
                            {social.label}
                          </p>
                          <p className="text-xs text-muted-foreground">{social.username}</p>
                        </div>
                        <ExternalLink className="h-3 w-3 text-muted-foreground group-hover:text-cyan-400 transition-colors ml-auto" />
                      </a>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-foreground font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-cyan-400 transition-colors text-sm"
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-foreground font-semibold mb-4">Skills</h3>
              <ul className="space-y-3">
                {[
                  "Frontend Development",
                  "HTML/CSS/JavaScript",
                  "Python & Flask",
                  "React.js (Learning)",
                  "UI/UX Design",
                ].map((skill, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-muted-foreground text-sm">{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-border"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-muted-foreground text-sm flex items-center gap-2">
                © 2024 Sahil Pant. Made with <Heart className="h-4 w-4 text-red-400" /> and lots of coffee.
              </p>
              <div className="flex gap-6 text-sm">
                <button className="text-muted-foreground hover:text-cyan-400 transition-colors">Privacy Policy</button>
                <button className="text-muted-foreground hover:text-cyan-400 transition-colors">
                  Terms of Service
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
