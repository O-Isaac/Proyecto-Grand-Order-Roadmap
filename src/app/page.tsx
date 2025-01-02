import type { ResponseEvents } from "@/types/response";
import type { Metadata } from "next";
import toWork from "@/maps/toWork";
import Work from "@/components/work";

export const metadata: Metadata = {
  title: "Proyecto Grand Order - Roadmap",
  description: "Mira todos los proyecto que trabajamos para 2025",
  openGraph: {
    images:
      "https://services.proyectograndorder.es/api/og/image?title=Roadmap%20de%202025",
  },
};

export default async function Home() {
  const req = await fetch(`https://services.proyectograndorder.es/api/events`);
  const res: ResponseEvents = await req.json();
  const works = res.sheets.map(toWork);

  return (
    <section className="container mx-auto mt-20 px-4">
      <h2 className="text-6xl font-bold">Roadmap</h2>
      <p className="mt-4 mx-1">
        Estos son los eventos que vamos a traducir durante los siguientes años
      </p>

      {works.map((work) => (
        <Work key={work.name} year={work.name} status={work.status} />
      ))}
    </section>
  );
}
