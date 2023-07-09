/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { v4 as uuidv4 } from "uuid";
import { Tasks } from "./components/tasks";
import { Task } from "./interfaces";

export function App() {
  const [inputTask, setInputTask] = useState<string>("");
  const [NoncompletedTasks, setNoncompletedTasks] = useState<Task[]>([]);
  const [completedState, setcompletedState] = useState<boolean>(false);
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
  const handleCompletedTaksState = () => {
    setcompletedState(!completedState);
  };
  const filterNonCompletedTasks = () => {
    const completedTasks = tasks.filter((item) => item.completed == false);
    setNoncompletedTasks(completedTasks);
  };
  useEffect(() => {
    if (completedState) {
      filterNonCompletedTasks();
    } else {
      setNoncompletedTasks([]);
    }
  }, [completedState, tasks]);
  return (
    <div className="bg-blue-200 py-5 min-h-screen flex justify-center items-center font-mono">
      <div className="bg-white shadow-lg overflow-y-auto  mt-5 w-96 py-2 rounded-xl ">
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
            <Tasks
              tasks={NoncompletedTasks.length == 0 ? tasks : NoncompletedTasks}
              setTasks={setTasks}
            />
          )}
        </div>

        <div className="flex items-center mb-4 justify-center">
          <input
            id="default-checkbox"
            onClick={handleCompletedTaksState}
            type="checkbox"
            value=""
            className="w-4 h-4 text-gray-400 bg-gray-800 border-gray-300 rounded focus:ring-gray-300 dark:focus:ring-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Only completed Tasks
          </label>
        </div>
      </div>
    </div>
  );
}
