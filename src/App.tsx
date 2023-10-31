/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Tasks } from "./components/tasks";
import { Task } from "./interfaces";
import { motion } from "framer-motion";

export function App() {
  const [inputTask, setInputTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "wdqwr8328e3",
      name: "Clean the wc",
      completed: false,
    },
    {
      id: "dwdwdwr8328e3",
      name: "Cook my meal",
      completed: false,
    },
    {
      id: "dwdsdjo8e3",
      name: "100 push ups",
      completed: true,
    },
    {
      id: "dwdsdwweejo8e3",
      name: "Conquer Nadia ❤️",
      completed: false,
    },
  ]);

  const AddTask = () => {
    if (inputTask === "") {
      return;
    }

    setInputTask("");
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: uuidv4(), name: inputTask, completed: false },
    ]);
  };

  return (
    <div className="bg-blue-200 px-5 py-5 min-h-screen flex flex-col justify-center items-center font-mono">
      <motion.h3
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="font-bold text-4xl"
      >
        TODO-LIST-APP
      </motion.h3>
      <div className="bg-white  w-72 lg:w-4/12 shadow-lg overflow-y-auto  mt-5  py-2 rounded-xl ">
        <div className="flex ">
          <input
            className="w-10/12 m-1 bg-gray-100 rounded-xl px-3  focus:outline-none border-2 border-gray-200"
            placeholder="Write the task"
            value={inputTask}
            onChange={(e) => setInputTask(e.target.value)}
          ></input>
          <button
            onClick={AddTask}
            className="w-2/12 m-1 text-white font-semibold duration-200 ease-in-out hover:scale-105 bg-slate-400 rounded-xl"
          >
            Save
          </button>
        </div>
        <div className="p-3">
          {tasks.length == 0 ? (
            <h3 className="text-center bg-slate-200 rounded-xl">
              ⬆️ ADD A TASK ⬆️
            </h3>
          ) : (
            <Tasks tasks={tasks} setTasks={setTasks} />
          )}
        </div>
      </div>
    </div>
  );
}
