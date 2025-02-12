import type { Navigation } from "@/types/navigation";

import Link from "next/link";
import Image from "next/image";

import { ThemeSwitch } from "./dyanmic";

import Documentation from "@/icons/documentation";
import Github from "@/icons/github";

const Navigation: React.FC<Navigation> = () => {
  return (
    <header className="h-auto w-full border-b sticky top-0 bg-white/70 dark:bg-neutral-900/70 dark:border-neutral-800 backdrop-blur-md z-50">
      <nav className="flex gap-2 p-3 justify-between items-center container mx-auto">
        <Link className="flex items-center gap-1" href="/">
          <Image
            className="logo dark:invert"
            height={40}
            width={40}
            src="logo.svg"
            alt="Proyecto Grand Order Logo"
          />
          <h1 className="font-medium">Proyecto Grand Order</h1>
        </Link>

        <ul className="flex gap-2 items-center">
          <li>
            <Link
              className="flex gap-2 items-center"
              href="https://proyectograndorder.es"
            >
              <Documentation />
              <span className="text-sm hidden md:hidden lg:block dark:text-neutral-300 dark:hover:text-neutral-200 transition-colors">
                Documentación
              </span>
            </Link>
          </li>
          <li>
            <Link
              className="flex gap-2 items-center"
              href="https://github.com/O-Isaac/Proyecto-Grand-Order-Roadmap"
            >
              <Github />
              <span className="text-sm hidden md:hidden lg:block dark:text-neutral-300 dark:hover:text-neutral-200 transition-colors">
                Github
              </span>
            </Link>
          </li>
          <ThemeSwitch />
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
