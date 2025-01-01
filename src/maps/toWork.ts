import type { Sheet } from "@/types/response";

export default function toWork(sheet: Sheet) {
  const status = {
    planeado: sheet.events.filter((event) => event.status === "Planeado"),
    trabajando: sheet.events.filter((event) => event.status === "Trabajando"),
    completado: sheet.events.filter((event) => event.status === "Completado"),
  };

  return { name: sheet.name, status };
}
