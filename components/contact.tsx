"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import {
  Send,
  Mail,
  MapPin,
  Calendar,
  CheckCircle,
  Github,
  ExternalLink,
  Loader2,
  Sparkles,
  MessageCircle,
  Clock,
  Shield,
} from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSuccess(true)
        toast({
          title: "Message sent successfully! ✨",
          description: "Thank you for reaching out. I'll get back to you within 24 hours.",
        })
        setFormData({ name: "", email: "", subject: "", message: "" })

        // Reset success state after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000)
      } else {
        throw new Error(data.error || "Failed to send message")
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: error instanceof Error ? error.message : "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sahil111pant@gmail.com",
      href: "mailto:sahil111pant@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },

    {
      icon: MapPin,
      label: "Location",
      value: "Faridabad, Haryana, India",
      href: "#",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Calendar,
      label: "Availability",
      value: "Mon - Fri, 9AM - 6PM",
      href: "#",
      color: "from-orange-500 to-amber-500",
    },
  ]

  const socialLinks = [
 
    {
      icon: Github,
      label: "GitHub",
      value: "View my code",
      href: "https://github.com/Sahil-Pant",
      color: "from-gray-600 to-gray-500",
    },
  ]

  const features = [
    {
      icon: MessageCircle,
      title: "Quick Response",
      description: "I respond to all messages within 24 hours",
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Available for meetings across different time zones",
    },
    {
      icon: Shield,
      title: "Confidential",
      description: "Your project details are kept completely secure",
    },
  ]

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-full px-6 py-2 mb-6"
            >
              <Sparkles className="h-4 w-4 text-cyan-400" />
              <span className="text-sm text-cyan-400 font-medium">Let's Work Together</span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-6xl font-bold text-foreground mb-6"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let's{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Connect
              </span>
            </motion.h2>
            <motion.p
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-2xl font-bold text-foreground mb-6"
                >
                  Get in touch
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-muted-foreground mb-8 leading-relaxed"
                >
                  I'm always excited to work on new projects and collaborate with amazing people. Whether you have a
                  project in mind or just want to chat about technology, feel free to reach out!
                </motion.p>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02, x: 5 }}
                        className="group"
                      >
                        <Card className="glass border-border/50 backdrop-blur-xl hover:border-cyan-500/40 transition-all duration-300 relative overflow-hidden">
                          <div
                            className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                            style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }}
                          />
                          <CardContent className="p-4 relative z-10">
                            <div className="flex items-center gap-4">
                              <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5 }}
                                className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center`}
                              >
                                <IconComponent className="h-6 w-6 text-white" />
                              </motion.div>
                              <div>
                                <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                                <p className="text-foreground font-medium group-hover:text-cyan-400 transition-colors">
                                  {info.value}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Social Links */}
                <div className="mt-8 space-y-4">
                  <h4 className="text-lg font-semibold text-foreground">Connect with me</h4>
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02, x: 5 }}
                        className="group"
                      >
                        <a href={social.href} target="_blank" rel="noopener noreferrer" className="block">
                          <Card className="glass border-border/50 backdrop-blur-xl hover:border-cyan-500/40 transition-all duration-300 relative overflow-hidden">
                            <div
                              className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                              style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }}
                            />
                            <CardContent className="p-4 relative z-10">
                              <div className="flex items-center gap-4">
                                <motion.div
                                  whileHover={{ rotate: 360 }}
                                  transition={{ duration: 0.5 }}
                                  className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-xl flex items-center justify-center`}
                                >
                                  <IconComponent className="h-6 w-6 text-white" />
                                </motion.div>
                                <div className="flex-1">
                                  <p className="text-sm text-muted-foreground mb-1">{social.label}</p>
                                  <p className="text-foreground font-medium group-hover:text-cyan-400 transition-colors">
                                    {social.value}
                                  </p>
                                </div>
                                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-cyan-400 transition-colors" />
                              </div>
                            </CardContent>
                          </Card>
                        </a>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Features */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="mt-8 grid grid-cols-1 gap-4"
                >
                  {features.map((feature, index) => {
                    const IconComponent = feature.icon
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                        className="p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <IconComponent className="h-5 w-5 text-green-400" />
                          <h5 className="text-foreground font-semibold">{feature.title}</h5>
                        </div>
                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                      </motion.div>
                    )
                  })}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
