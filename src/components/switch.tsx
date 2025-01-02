"use client";

import dynamic from "next/dynamic";

const ThemeSwitch = dynamic(() => import("./theme"), {
  ssr: false,
  loading: () => (
    <button className="size-6 bg-neutral-300 dark:bg-neutral-700 rounded-full animate-pulse"></button>
  ),
});

export const SwitchTheme: React.FC = () => <ThemeSwitch />;
