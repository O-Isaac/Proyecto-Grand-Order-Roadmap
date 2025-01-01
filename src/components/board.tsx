import type { Board } from "@/types/board";

const Board: React.FC<Board> = ({ items, title }) => {
  return (
    <div className="size-full board-wrapper">
      <h3 className="text-lg board-title font-medium p-4 border dark:border-neutral-800 rounded-t-lg">
        {title}
      </h3>
      <div className="bg-neutral-100 dark:bg-neutral-800 board-body p-4 rounded-b-lg">
        <ul>
          {items.map((item) => {
            return <li key={item.event}>{item.event}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Board;
