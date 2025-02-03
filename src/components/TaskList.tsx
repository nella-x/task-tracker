import TaskItem from "./TaskItem";
import { Task } from "../types";

type TaskListProps = {
  tasks: Task[];
  toggleTaskCompletion: (id: number) => void;
  deleteTask: (id: number) => void;
  editTask: (id: number, newText: string) => void;
};

const TaskList: React.FC<TaskListProps> = ({ tasks, toggleTaskCompletion, deleteTask, editTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={toggleTaskCompletion}
          onDelete={deleteTask}
          onEdit={editTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
