"use client";

import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check system preference on mount
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(prevIsDark => {
      const newIsDark = !prevIsDark;
      if (newIsDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return newIsDark;
    });
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className={`fixed bottom-5 right-5 p-3 rounded-full bg-primary text-primary-foreground shadow-lg ${
        isDark ? 'dark' : ''
      }`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <Sun className={`h-6 w-6 transition-all ${
        isDark ? '-rotate-90 scale-0' : 'rotate-0 scale-100'
      }`} />
      <Moon className={`absolute h-6 w-6 transition-all ${
        isDark ? 'rotate-0 scale-100' : 'rotate-90 scale-0'
      }`} />
      <span className="sr-only">Toggle theme</span>
    </motion.button>
  );
} 