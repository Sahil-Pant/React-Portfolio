"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp, MessageCircle, Github,} from "lucide-react"

export function FloatingActionButton() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const actions = [
    {
      icon: MessageCircle,
      label: "Contact",
      action: scrollToContact,
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Github,
      label: "GitHub",
      action: () => window.open("https://github.com/sahil111pant", "_blank"),
      color: "from-gray-600 to-gray-500",
    },

  ]

  return (
    <AnimatePresence>
      {showScrollTop && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <div className="relative">
            {/* Action Buttons */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute bottom-16 right-0 space-y-3"
                >
                  {actions.map((action, index) => {
                    const IconComponent = action.icon
                    return (
                      <motion.div
                        key={action.label}
                        initial={{ opacity: 0, x: 20, scale: 0 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 20, scale: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Button
                          size="sm"
                          onClick={action.action}
                          className={`bg-gradient-to-r ${action.color} hover:shadow-lg transition-all duration-300 text-white`}
                        >
                          <IconComponent className="h-4 w-4 mr-2" />
                          {action.label}
                        </Button>
                      </motion.div>
                    )
                  })}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main FAB */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{ rotate: isExpanded ? 45 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <Button
                size="icon"
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <motion.div animate={{ rotate: isExpanded ? 45 : 0 }} transition={{ duration: 0.3 }}>
                  {isExpanded ? <ArrowUp className="h-6 w-6 text-white" /> : <ArrowUp className="h-6 w-6 text-white" />}
                </motion.div>
              </Button>
            </motion.div>

            {/* Scroll to Top (appears on double-click) */}
            <motion.div className="absolute inset-0" onDoubleClick={scrollToTop} whileHover={{ scale: 1.05 }} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
