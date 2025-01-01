import type { Work } from "@/types/work";
import Board from "./board";

const Work: React.FC<Work> = ({ status, year }) => {
  return (
    <details open className="mt-20">
      <summary className="text-6xl font-extrabold before:hidden">
        {year}
      </summary>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 mt-10 gap-4 justify-between h-full">
        <Board title="Planeado" items={status.planeado} />
        <Board title="Trabajando" items={status.trabajando} />
        <Board title="Completado" items={status.completado} />
      </div>
    </details>
  );
};

export default Work;
