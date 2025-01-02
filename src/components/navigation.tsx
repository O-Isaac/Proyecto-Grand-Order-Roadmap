import type { Navigation } from "@/types/navigation";

import Link from "next/link";
import Image from "next/image";

import Documentation from "@/icons/documentation";
import Roadmap from "@/icons/roadmap";
import { SwitchTheme } from "./switch";

const Navigation: React.FC<Navigation> = () => {
  return (
    <header className="h-auto w-full border-b sticky top-0 bg-white/70 dark:bg-neutral-900/70 dark:border-neutral-800 backdrop-blur-md">
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
            <Link href="/">
              <Roadmap />
            </Link>
          </li>
          <li>
            <Link href="https://proyectograndorder.es">
              <Documentation />
            </Link>
          </li>
          <SwitchTheme />
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
