"use client"

import { memo, useMemo, useCallback } from "react"
import { motion } from "framer-motion"

// Memoized animation variants for better performance
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
}

// Optimized motion component
export const OptimizedMotion = memo(({ children, ...props }: any) => {
  const optimizedProps = useMemo(
    () => ({
      ...props,
      style: { willChange: "transform", ...props.style },
    }),
    [props],
  )

  return <motion.div {...optimizedProps}>{children}</motion.div>
})

OptimizedMotion.displayName = "OptimizedMotion"

// Intersection Observer hook for lazy loading
export const useIntersectionObserver = (callback: () => void, options = {}) => {
  const observer = useMemo(() => {
    if (typeof window === "undefined") return null

    return new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback()
          }
        })
      },
      { threshold: 0.1, ...options },
    )
  }, [callback, options])

  const observe = useCallback(
    (element: Element | null) => {
      if (element && observer) {
        observer.observe(element)
      }
    },
    [observer],
  )

  const unobserve = useCallback(
    (element: Element | null) => {
      if (element && observer) {
        observer.unobserve(element)
      }
    },
    [observer],
  )

  return { observe, unobserve }
}

// Debounced scroll handler
export const useDebounce = (func: Function, delay: number) => {
  return useCallback(
    (...args: any[]) => {
      const timeoutId = setTimeout(() => func(...args), delay)
      return () => clearTimeout(timeoutId)
    },
    [func, delay],
  )
}
