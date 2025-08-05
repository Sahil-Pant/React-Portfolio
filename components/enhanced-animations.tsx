"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
}

export const AnimatedText = ({ text, className = "", delay = 0 }: AnimatedTextProps) => {
  const words = text.split(" ")

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: delay,
          },
        },
      }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-2"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
}

export const MagneticButton = ({ children, className = "", onClick }: MagneticButtonProps) => {
  return (
    <motion.button
      className={className}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        boxShadow: [
          "0 0 20px rgba(6, 182, 212, 0.3)",
          "0 0 40px rgba(147, 51, 234, 0.4)",
          "0 0 20px rgba(6, 182, 212, 0.3)",
        ],
      }}
      transition={{
        boxShadow: { duration: 2, repeat: Number.POSITIVE_INFINITY },
        scale: { duration: 0.2 },
      }}
    >
      {children}
    </motion.button>
  )
}

interface FloatingElementProps {
  children: ReactNode
  className?: string
  duration?: number
  delay?: number
}

export const FloatingElement = ({ children, className = "", duration = 6, delay = 0 }: FloatingElementProps) => {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 5, 0],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}

interface ParallaxContainerProps {
  children: ReactNode
  className?: string
  speed?: number
}

export const ParallaxContainer = ({ children, className = "", speed = 0.5 }: ParallaxContainerProps) => {
  return (
    <motion.div
      className={className}
      style={{
        y: `${speed * 100}%`,
      }}
    >
      {children}
    </motion.div>
  )
}

interface GlowCardProps {
  children: ReactNode
  className?: string
  glowColor?: string
}

export const GlowCard = ({ children, className = "", glowColor = "cyan" }: GlowCardProps) => {
  const glowColors = {
    cyan: "rgba(6, 182, 212, 0.3)",
    purple: "rgba(147, 51, 234, 0.3)",
    pink: "rgba(236, 72, 153, 0.3)",
    green: "rgba(34, 197, 94, 0.3)",
  }

  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{
        scale: 1.02,
        boxShadow: `0 0 30px ${glowColors[glowColor as keyof typeof glowColors]}`,
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute inset-0 rounded-lg opacity-0"
        animate={{
          opacity: [0, 0.5, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          background: `radial-gradient(circle, ${glowColors[glowColor as keyof typeof glowColors]}, transparent 70%)`,
        }}
      />
      {children}
    </motion.div>
  )
}
