"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Code, Sparkles, Zap, Rocket } from "lucide-react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

  const steps = [
    {
      icon: Code,
      text: "Initializing Portfolio",
      color: "from-cyan-400 to-blue-500",
    },
    {
      icon: Sparkles,
      text: "Loading Projects",
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: Zap,
      text: "Optimizing Performance",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: Rocket,
      text: "Ready to Launch",
      color: "from-orange-400 to-red-500",
    },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 2;
        const stepIndex = Math.floor((newProgress / 100) * steps.length);
        setCurrentStep(Math.min(stepIndex, steps.length - 1));

        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }

        return newProgress;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete, steps.length]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50 overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          {screenSize.width > 0 &&
            [...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-30"
                animate={{
                  x: [0, Math.random() * screenSize.width],
                  y: [0, Math.random() * screenSize.height],
                  scale: [0, 1, 0],
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 2,
                }}
                style={{
                  left: Math.random() * 100 + "%",
                  top: Math.random() * 100 + "%",
                }}
              />
            ))}
        </div>

        <div className="text-center relative z-10 max-w-md mx-auto px-6">
          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl"
              >
                <Code className="h-12 w-12 text-white" />
              </motion.div>

              {[Sparkles, Zap, Rocket].map((Icon, index) => (
                <motion.div
                  key={index}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 4 + index,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="absolute inset-0"
                  style={{ transformOrigin: "50% 50%" }}
                >
                  <div
                    className="absolute w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center"
                    style={{
                      top: `${20 + index * 15}%`,
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  >
                    <Icon className="h-3 w-3 text-white" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Sahil's
            </span>{" "}
            Portfolio
          </motion.h1>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                  className={`w-8 h-8 bg-gradient-to-r ${steps[currentStep].color} rounded-lg flex items-center justify-center`}
                >
                  {(() => {
                    const IconComponent = steps[currentStep].icon;
                    return <IconComponent className="h-4 w-4 text-white" />;
                  })()}
                </motion.div>
                <span className="text-xl text-gray-300 font-medium">
                  {steps[currentStep].text}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="w-full max-w-sm mx-auto"
          >
            <div className="bg-gray-800 rounded-full h-3 overflow-hidden shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full relative"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              >
                <motion.div
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                />
              </motion.div>
            </div>
            <div className="flex justify-between items-center mt-3">
              <span className="text-gray-400 text-sm">
                {progress}% Complete
              </span>
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                className="text-cyan-400 text-sm font-medium"
              >
                Loading...
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="flex justify-center gap-2 mt-8"
          >
            {steps.map((_, index) => (
              <motion.div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index <= currentStep ? "bg-cyan-400" : "bg-gray-600"
                }`}
                animate={index === currentStep ? { scale: [1, 1.5, 1] } : {}}
                transition={{
                  duration: 0.5,
                  repeat: index === currentStep ? Number.POSITIVE_INFINITY : 0,
                }}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
