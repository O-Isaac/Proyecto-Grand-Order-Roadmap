"use client";

import type { MouseEventHandler } from "react";
import { useTheme } from "next-themes";

import Moon from "@/icons/moon";
import Sun from "@/icons/sun";

const ThemeChanger = () => {
  const { resolvedTheme: theme, setTheme } = useTheme();

  const onClick: MouseEventHandler = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button onClick={onClick}>
      {theme === "light" && <Sun />}
      {theme === "dark" && <Moon />}
    </button>
  );
};

export default ThemeChanger;
