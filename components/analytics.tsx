"use client"

import { useEffect } from "react"

export function Analytics() {
  useEffect(() => {
    // Google Analytics 4
    const GA_MEASUREMENT_ID = "G-XXXXXXXXXX" // Replace with your actual GA4 Measurement ID

    // Load Google Analytics script
    const script1 = document.createElement("script")
    script1.async = true
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
    document.head.appendChild(script1)

    // Initialize Google Analytics
    const script2 = document.createElement("script")
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}');
    `
    document.head.appendChild(script2)

    // Track page views
    const trackPageView = () => {
      if (typeof window !== "undefined" && (window as any).gtag) {
        ;(window as any).gtag("config", GA_MEASUREMENT_ID, {
          page_title: document.title,
          page_location: window.location.href,
        })
      }
    }

    trackPageView()

    // Track custom events
    const trackEvent = (action: string, category: string, label?: string) => {
      if (typeof window !== "undefined" && (window as any).gtag) {
        ;(window as any).gtag("event", action, {
          event_category: category,
          event_label: label,
        })
      }
    }

    // Add event listeners for tracking
    const trackButtonClicks = () => {
      document.addEventListener("click", (e) => {
        const target = e.target as HTMLElement
        if (target.tagName === "BUTTON" || target.closest("button")) {
          const buttonText = target.textContent || target.closest("button")?.textContent || "Unknown"
          trackEvent("click", "button", buttonText)
        }
      })
    }

    trackButtonClicks()

    return () => {
      // Cleanup if needed
    }
  }, [])

  return null
}
