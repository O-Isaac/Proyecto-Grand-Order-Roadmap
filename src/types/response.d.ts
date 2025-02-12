export interface Event {
  event: string;
  status: "Trabajando" | "Planeado" | "Skip" | "Completado";
  lines: number;
  completed: number;
  image: string;
}

export interface Sheet {
  name: string;
  events: Event[];
}

export interface ResponseEvents {
  status: number;
  message: string;
  sheets: Sheet[];
}
