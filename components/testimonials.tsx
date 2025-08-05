"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, Linkedin, Twitter } from "lucide-react"
import { useState } from "react"

const testimonials = [
  // {
  //   id: 1,
  //   name: "Dr. Rajesh Kumar",
  //   role: "Senior Developer",
  //   company: "Jawaharlal Nehru University",
  //   image: "/placeholder.svg?height=60&width=60",
  //   rating: 5,
  //   text: "Sahil has shown exceptional skills in frontend development during his internship. His attention to detail and ability to create responsive, user-friendly interfaces is impressive. He consistently delivers high-quality work on time.",
  //   project: "University Web Application",
  //   social: {
  //     linkedin: "#",
  //     twitter: "#",
  //   },
  // },
  // {
  //   id: 2,
  //   name: "Priya Sharma",
  //   role: "UI/UX Designer",
  //   company: "Tech Solutions Inc",
  //   image: "/placeholder.svg?height=60&width=60",
  //   rating: 5,
  //   text: "Working with Sahil was a fantastic experience. He perfectly translated our design concepts into beautiful, functional websites. His understanding of modern web technologies and design principles is remarkable.",
  //   project: "E-commerce Platform",
  //   social: {
  //     linkedin: "#",
  //     twitter: "#",
  //   },
  // },
  // {
  //   id: 3,
  //   name: "Amit Patel",
  //   role: "Project Manager",
  //   company: "Digital Innovations",
  //   image: "/placeholder.svg?height=60&width=60",
  //   rating: 5,
  //   text: "Sahil's dedication and technical expertise made our project a huge success. He's not just a developer but a problem solver who brings creative solutions to complex challenges. Highly recommended!",
  //   project: "Corporate Website Redesign",
  //   social: {
  //     linkedin: "#",
  //     twitter: "#",
  //   },
  // },
  // {
  //   id: 4,
  //   name: "Sarah Johnson",
  //   role: "Startup Founder",
  //   company: "InnovateTech",
  //   image: "/placeholder.svg?height=60&width=60",
  //   rating: 5,
  //   text: "Sahil helped us build our MVP from scratch. His ability to work with modern frameworks and deliver pixel-perfect designs exceeded our expectations. He's a valuable asset to any development team.",
  //   project: "SaaS Platform Development",
  //   social: {
  //     linkedin: "#",
  //     twitter: "#",
  //   },
  // },
  // {
  //   id: 5,
  //   name: "Michael Chen",
  //   role: "Tech Lead",
  //   company: "WebCraft Studios",
  //   image: "/placeholder.svg?height=60&width=60",
  //   rating: 5,
  //   text: "Sahil's passion for web development is evident in every project he touches. His code is clean, well-documented, and follows best practices. He's always eager to learn and implement new technologies.",
  //   project: "Multi-platform Web App",
  //   social: {
  //     linkedin: "#",
  //     twitter: "#",
  //   },
  // },
]

export function Testimonials() {
  // const [activeTestimonial, setActiveTestimonial] = useState(0)

  // return (
  //   <section className="py-20 relative overflow-hidden">
  //     {/* Background Elements */}
  //     <div className="absolute inset-0">
  //       <motion.div
  //         animate={{
  //           scale: [1, 1.2, 1],
  //           rotate: [0, 180, 360],
  //           opacity: [0.1, 0.3, 0.1],
  //         }}
  //         transition={{
  //           duration: 30,
  //           repeat: Number.POSITIVE_INFINITY,
  //           ease: "linear",
  //         }}
  //         className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
  //       />
  //     </div>

  //     <div className="container mx-auto px-4 relative z-10">
  //       <div className="max-w-6xl mx-auto">
  //         <motion.div
  //           initial={{ opacity: 0, y: 20 }}
  //           whileInView={{ opacity: 1, y: 0 }}
  //           transition={{ duration: 0.8 }}
  //           viewport={{ once: true }}
  //           className="text-center mb-16"
  //         >
  //           <motion.div
  //             initial={{ scale: 0 }}
  //             whileInView={{ scale: 1 }}
  //             transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
  //             viewport={{ once: true }}
  //             className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full px-6 py-2 mb-6"
  //           >
  //             <Quote className="h-4 w-4 text-purple-400" />
  //             <span className="text-sm text-purple-400 font-medium">Client Testimonials</span>
  //           </motion.div>

  //           <motion.h2
  //             className="text-4xl md:text-6xl font-bold text-foreground mb-6"
  //             initial={{ opacity: 0, scale: 0.5 }}
  //             whileInView={{ opacity: 1, scale: 1 }}
  //             transition={{ duration: 0.8, delay: 0.2 }}
  //             viewport={{ once: true }}
  //           >
  //             What{" "}
  //             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
  //               Clients Say
  //             </span>
  //           </motion.h2>
  //           <motion.p
  //             className="text-xl text-muted-foreground max-w-3xl mx-auto"
  //             initial={{ opacity: 0, y: 30 }}
  //             whileInView={{ opacity: 1, y: 0 }}
  //             transition={{ duration: 0.8, delay: 0.4 }}
  //             viewport={{ once: true }}
  //           >
  //             Don't just take my word for it - hear from the amazing people I've had the pleasure to work with
  //           </motion.p>
  //         </motion.div>

  //         {/* Main Testimonial Display */}
  //         <motion.div
  //           initial={{ opacity: 0, y: 50 }}
  //           whileInView={{ opacity: 1, y: 0 }}
  //           transition={{ duration: 0.8 }}
  //           viewport={{ once: true }}
  //           className="mb-12"
  //         >
  //           <Card className="glass border-border/50 backdrop-blur-xl relative overflow-hidden max-w-4xl mx-auto">
  //             <motion.div
  //               animate={{
  //                 background: [
  //                   "linear-gradient(45deg, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1))",
  //                   "linear-gradient(45deg, rgba(236, 72, 153, 0.1), rgba(6, 182, 212, 0.1))",
  //                   "linear-gradient(45deg, rgba(6, 182, 212, 0.1), rgba(147, 51, 234, 0.1))",
  //                 ],
  //               }}
  //               transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
  //               className="absolute inset-0"
  //             />

  //             <CardContent className="p-8 md:p-12 relative z-10">
  //               <motion.div
  //                 key={activeTestimonial}
  //                 initial={{ opacity: 0, x: 50 }}
  //                 animate={{ opacity: 1, x: 0 }}
  //                 exit={{ opacity: 0, x: -50 }}
  //                 transition={{ duration: 0.5 }}
  //                 className="text-center"
  //               >
  //                 {/* Quote Icon */}
  //                 <motion.div
  //                   animate={{ rotate: [0, 5, -5, 0] }}
  //                   transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
  //                   className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6"
  //                 >
  //                   <Quote className="h-8 w-8 text-white" />
  //                 </motion.div>

  //                 {/* Rating */}
  //                 <div className="flex justify-center gap-1 mb-6">
  //                   {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
  //                     <motion.div
  //                       key={i}
  //                       initial={{ opacity: 0, scale: 0 }}
  //                       animate={{ opacity: 1, scale: 1 }}
  //                       transition={{ delay: i * 0.1, duration: 0.3 }}
  //                     >
  //                       <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
  //                     </motion.div>
  //                   ))}
  //                 </div>

  //                 {/* Testimonial Text */}
  //                 <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
  //                   "{testimonials[activeTestimonial].text}"
  //                 </blockquote>

  //                 {/* Client Info */}
  //                 <div className="flex flex-col md:flex-row items-center justify-center gap-6">
  //                   <div className="flex items-center gap-4">
  //                     <Avatar className="w-16 h-16 border-2 border-purple-500/30">
  //                       <AvatarImage src={testimonials[activeTestimonial].image || "/placeholder.svg"} />
  //                       <AvatarFallback className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold">
  //                         {testimonials[activeTestimonial].name
  //                           .split(" ")
  //                           .map((n) => n[0])
  //                           .join("")}
  //                       </AvatarFallback>
  //                     </Avatar>
  //                     <div className="text-left">
  //                       <h4 className="text-lg font-bold text-foreground">{testimonials[activeTestimonial].name}</h4>
  //                       <p className="text-purple-400 font-medium">{testimonials[activeTestimonial].role}</p>
  //                       <p className="text-muted-foreground text-sm">{testimonials[activeTestimonial].company}</p>
  //                     </div>
  //                   </div>

  //                   <div className="flex items-center gap-4">
  //                     <Badge className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-500/30">
  //                       {testimonials[activeTestimonial].project}
  //                     </Badge>
  //                     <div className="flex gap-2">
  //                       <motion.a
  //                         href={testimonials[activeTestimonial].social.linkedin}
  //                         whileHover={{ scale: 1.1 }}
  //                         className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center"
  //                       >
  //                         <Linkedin className="h-4 w-4 text-white" />
  //                       </motion.a>
  //                       <motion.a
  //                         href={testimonials[activeTestimonial].social.twitter}
  //                         whileHover={{ scale: 1.1 }}
  //                         className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center"
  //                       >
  //                         <Twitter className="h-4 w-4 text-white" />
  //                       </motion.a>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </motion.div>
  //             </CardContent>
  //           </Card>
  //         </motion.div>

  //         {/* Testimonial Navigation */}
  //         <motion.div
  //           initial={{ opacity: 0, y: 20 }}
  //           whileInView={{ opacity: 1, y: 0 }}
  //           transition={{ delay: 0.6, duration: 0.8 }}
  //           viewport={{ once: true }}
  //           className="flex flex-wrap justify-center gap-4"
  //         >
  //           {testimonials.map((testimonial, index) => (
  //             <motion.button
  //               key={testimonial.id}
  //               onClick={() => setActiveTestimonial(index)}
  //               whileHover={{ scale: 1.05 }}
  //               whileTap={{ scale: 0.95 }}
  //               className={`p-4 rounded-xl border transition-all duration-300 ${
  //                 index === activeTestimonial
  //                   ? "border-purple-500/50 bg-purple-500/10"
  //                   : "border-border/50 bg-card/50 hover:border-purple-500/30"
  //               }`}
  //             >
  //               <div className="flex items-center gap-3">
  //                 <Avatar className="w-10 h-10">
  //                   <AvatarImage src={testimonial.image || "/placeholder.svg"} />
  //                   <AvatarFallback className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm">
  //                     {testimonial.name
  //                       .split(" ")
  //                       .map((n) => n[0])
  //                       .join("")}
  //                   </AvatarFallback>
  //                 </Avatar>
  //                 <div className="text-left">
  //                   <p className="text-sm font-medium text-foreground">{testimonial.name}</p>
  //                   <p className="text-xs text-muted-foreground">{testimonial.company}</p>
  //                 </div>
  //               </div>
  //             </motion.button>
  //           ))}
  //         </motion.div>

  //         {/* Auto-rotation indicator */}
  //         <motion.div
  //           initial={{ opacity: 0 }}
  //           whileInView={{ opacity: 1 }}
  //           transition={{ delay: 0.8, duration: 0.5 }}
  //           viewport={{ once: true }}
  //           className="flex justify-center mt-8"
  //         >
  //           <div className="flex gap-2">
  //             {testimonials.map((_, index) => (
  //               <motion.div
  //                 key={index}
  //                 className={`w-2 h-2 rounded-full transition-all duration-300 ${
  //                   index === activeTestimonial ? "bg-purple-400 w-8" : "bg-gray-600"
  //                 }`}
  //                 animate={index === activeTestimonial ? { scale: [1, 1.2, 1] } : {}}
  //                 transition={{ duration: 0.5, repeat: index === activeTestimonial ? Number.POSITIVE_INFINITY : 0 }}
  //               />
  //             ))}
  //           </div>
  //         </motion.div>
  //       </div>
  //     </div>
  //   </section>
  // )
}
