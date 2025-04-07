"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || 
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setIsDark(savedTheme === "dark");
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <label className="theme-switch" title="Toggle dark/light mode">
      <input type="checkbox" checked={isDark} onChange={toggleTheme} />
      <span className="slider"></span>
    </label>
  );
}