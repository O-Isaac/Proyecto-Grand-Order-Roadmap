import type { Navigation as NavigationProps } from "@/types/navigation";
import type { ResponseEvents } from "@/types/response";

import Link from "next/link";
import Image from "next/image";

import { ThemeSwitch } from "./dyanmic";

import Documentation from "@/icons/documentation";
import Github from "@/icons/github";
import toWork from "@/maps/toWork";
import toAnchorId from "@/utils/toAnchorId";
import Roadmap from "@/icons/roadmap";

async function Navigation() {
  const req = await fetch("https://services.proyectograndorder.es/api/events", {
    next: { revalidate: 300 },
  });
  const res: ResponseEvents = await req.json();
  const works = res.sheets.map(toWork);
  const years = works.map((work) => ({
    name: work.name,
    anchorId: toAnchorId(work.name),
  }));

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
          <h1 className="font-medium hidden sm:inline">Proyecto Grand Order</h1>
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

          <li className="relative">
            <details className="group">
              <summary
                aria-label="Años"
                className="flex items-center gap-2 px-3 py-2 rounded-full border border-transparent hover:border-neutral-300 dark:hover:border-neutral-700 bg-white/80 dark:bg-neutral-900/80  cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden"
              >
                <Roadmap className="size-6 text-neutral-900 dark:text-neutral-300" />
                <span className="hidden sm:inline">Años</span>
              </summary>
              <div className="absolute right-0 mt-2 w-44 rounded-xl border dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-lg overflow-hidden">
                <ul className="max-h-72 overflow-y-auto py-2">
                  {years.map((year) => (
                    <li key={year.anchorId}>
                      <Link
                        className="flex items-center px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800"
                        href={`/#${year.anchorId}`}
                      >
                        {year.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          </li>

          <ThemeSwitch />
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
