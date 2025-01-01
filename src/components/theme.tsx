"use client";

import Moon from "@/icons/moon";
import Sun from "@/icons/sun";
import { useTheme } from "next-themes";
import { useState, type MouseEventHandler, useEffect } from "react";

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const onClick: MouseEventHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="size-6 bg-neutral-300 dark:bg-neutral-700 rounded-full animate-pulse "></button>
    );
  }

  return (
    <button onClick={onClick}>
      {theme === "light" && <Sun />}
      {theme === "dark" && <Moon />}
    </button>
  );
};

export default ThemeChanger;
