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
            return (
              <li key={item.event}>
                <article className="w-full p-4 border my-2 rounded-xl bg-neutral-200 dark:bg-neutral-900 dark:border-neutral-800">
                  <h4>{item.event}</h4>
                  <p className="bg-green-500 rounded-full px-2 text-black inline">
                    {item.completed}/{item.lines}
                  </p>
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
