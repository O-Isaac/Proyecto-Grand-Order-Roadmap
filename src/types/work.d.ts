import type { Event } from "./response";

export interface Work {
  year: string;
  status: {
    planeado: Event[];
    trabajando: Event[];
    completado: Event[];
  };
}
