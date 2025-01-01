export interface Event {
  event: string;
  status: "Trabajando" | "Planeado" | "Skip" | "Completado";
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
