"use client"

import { useState, useEffect } from "react"
import { LoadingScreen } from "@/components/loading-screen"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Projects } from "@/components/projects"
// import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { Toaster } from "@/components/ui/toaster"
import { FloatingActionButton } from "@/components/floating-action-button"

export default function Home() {
  const [showSplash, setShowSplash] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Preload critical resources
    const preloadImages = [
      "/images/sahil-profile.jpg",
      "/images/netflix-clone.png",
      "/images/spotify-clone.png",
      "/images/cafe-website.png",
    ]

    const imagePromises = preloadImages.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = resolve
        img.onerror = reject
        img.src = src
      })
    })

    Promise.allSettled(imagePromises).then(() => {
      setIsLoaded(true)
    })
  }, [])

  const handleLoadingComplete = () => {
    setShowSplash(false)
  }

  if (showSplash) {
    return <LoadingScreen onComplete={handleLoadingComplete} />
  }

  return (
    <ThemeProvider>
      <Analytics />
      <div className="min-h-screen bg-background transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Projects />
          {/* <Testimonials /> */}
          <Contact />
        </main>
        <Footer />
        <FloatingActionButton />
        <Toaster />
      </div>
    </ThemeProvider>
  )
}
