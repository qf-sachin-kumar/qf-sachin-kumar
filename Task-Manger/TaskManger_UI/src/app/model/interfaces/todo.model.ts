import { Status } from "../enums/status.enum";
import { Task } from "./task.model";

export interface Todo {
  todoId: string;
  todoTitle: string;
  todoDescription: string;
  createdDate: Date;
  dueDate: Date;
  tasks: Task[];
  status: Status;
}
