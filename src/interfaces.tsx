import { Dispatch, SetStateAction } from "react";

export interface Task {
  id: string;
  name: string;
  completed: boolean;
}

export interface Props {
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
}
