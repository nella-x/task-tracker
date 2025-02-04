import { Square, SquareCheck, Trash, Edit } from "lucide-react";
import { Task } from "../types";
import { useState } from "react";
import TaskEdit from "./TaskEdit";

type TaskItemProps = {
    task: Task;
    onToggleComplete: (id: number) => void;
    onDelete: (id: number) => void;
    onEdit: (id: number, newText: string) => void;
};

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggleComplete, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);

    if (isEditing) {
        return (
            <TaskEdit
                task={task}
                editTask={onEdit}
                setIsEditing={setIsEditing}
                onToggleComplete={onToggleComplete}
                onDelete={onDelete} 
            />
        );
    }
    

    return (
        <div className={`task-item ${task.completed ? "completed" : ""}`}>
            <div className="task-actions">
                <button onClick={() => onToggleComplete(task.id)} className="task-button">
                    {task.completed ? <SquareCheck size={22} color="green" /> : <Square size={22} />}
                </button>
                <button onClick={() => setIsEditing(true)} className="task-button">
                    <Edit size={22} />
                </button>
                <button onClick={() => onDelete(task.id)} className="task-button">
                    <Trash size={22} color="red" />
                </button>
            </div>
            <span className={`task-text ${task.completed ? "completed" : ""}`}>{task.text}</span>
        </div>
    );
    
}    

export default TaskItem;
