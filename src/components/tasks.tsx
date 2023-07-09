/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Props } from "../interfaces";
import { Reorder } from "framer-motion";

export const Tasks = ({ tasks, setTasks }: Props) => {
  const completeTask = (id: string) => {
    const updatedList = tasks.map((item) => {
      if (item.id == id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });

    setTasks(updatedList);
  };
  const handleRemove = (id: string) => {
    const newList = tasks.filter((item) => item.id != id);
    setTasks(newList);
  };
  return (
    <ul>
      <Reorder.Group axis="y" values={tasks} onReorder={setTasks}>
        {tasks.map((task) => {
          return (
            <Reorder.Item key={task.id} value={task}>
              <div
                className={` relative my-1 text-gray-700 bg-slate-300 font-extralight rounded-xl px-2 cursor-pointer text-sm  ${
                  task.completed && "line-through"
                }`}
              >
                <h3 className="w-fit" onClick={() => completeTask(task.id)}>
                  {" "}
                  {task.name}
                </h3>

                <button
                  onClick={() => handleRemove(task.id)}
                  className="absolute right-4 top-[3px] text-xs rounded-full bg-white text-slate-300 px-1"
                >
                  x
                </button>
              </div>
            </Reorder.Item>
          );
        })}
      </Reorder.Group>
    </ul>
  );
};
