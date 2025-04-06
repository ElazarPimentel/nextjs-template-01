'use client';

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Initialize state after component mounts on client
  useEffect(() => {
    setMounted(true);
    
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem("theme");
    
    if (savedTheme === "dark") {
      setIsDark(true);
    } else if (savedTheme === "light") {
      setIsDark(false);
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDark(true);
    }

    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (localStorage.getItem("theme")) return; // Don't override user preference
      setIsDark(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  // Apply theme changes when isDark state changes
  useEffect(() => {
    if (!mounted) return;
    
    updateTheme(isDark);
  }, [isDark, mounted]);

  // Function to set theme
  const updateTheme = (dark: boolean) => {
    if (dark) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    }
  };

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  // Don't render anything until after client-side hydration to prevent mismatch
  if (!mounted) {
    return null;
  }

  return (
    <label className="theme-switch" htmlFor="checkbox" title="Toggle dark/light mode" aria-label="Toggle dark mode">
      <input type="checkbox" id="checkbox" checked={isDark} onChange={toggleTheme} />
      <span className="slider round"></span>
    </label>
  );
} 