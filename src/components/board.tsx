import type { Board } from "@/types/board";
import Image from "next/image";

const toPercent = (current: number, total: number) => {
  const percent = (current / total) * 100;
  return Number.isNaN(percent) ? "0" : percent.toFixed(0);
};

const Board: React.FC<Board> = ({ items, title }) => {
  return (
    <div className="size-full board-wrapper">
      <h3 className="text-lg board-title font-medium p-4 border dark:border-neutral-800 rounded-t-lg">
        {title}
      </h3>
      <div className="bg-neutral-100 dark:bg-neutral-800 board-body p-4 rounded-b-lg">
        <ul>
          {items.map((item) => {
            return (
              <li key={item.event}>
                <article className="w-full border my-2 rounded-xl bg-neutral-200 dark:bg-neutral-900 dark:border-neutral-800">
                  {item.image && <Image className="rounded-xl -z-0 relative fade-image" width={2688} height={1252} src={item.image} alt="Banner" />}
                  <div className="p-4">
                    <h4>{item.event}</h4>
                    <p className="bg-green-500 rounded-full px-2 text-black inline">
                      {toPercent(item.completed, item.lines)}%
                    </p>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Board;
