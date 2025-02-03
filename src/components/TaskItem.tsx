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

    const taskItemStyle = {
        backgroundColor: "#ffffcc",
        border: "1px solid #ccc",
        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
        padding: "15px",
        marginBottom: "10px",
        borderRadius: "8px",
        display: "grid",
        gridTemplateColumns: "auto 1fr auto auto",
        alignItems: "start",
    };

    const taskTextStyle = {
        flexGrow: 1,
        fontSize: "1.2rem",
        marginLeft: "10px",
        marginRight: "10px",
    };

    const buttonStyle = {
        padding: "10px 0",
    };

    if (isEditing) {
        return (
            <TaskEdit
                task={task}
                editTask={onEdit}
                setIsEditing={setIsEditing}
                taskItemStyle={taskItemStyle}
                taskTextStyle={taskTextStyle} 
                buttonStyle={buttonStyle} 
            />
        );
    }

    return (
        <div className={`task-item ${task.completed ? "completed" : ""}`}>
            <button onClick={() => onToggleComplete(task.id)} className="task-button">
                {task.completed ? <SquareCheck size={22} color="green" /> : <Square size={22} />}
            </button>
            <button onClick={() => setIsEditing(true)} className="task-button">
                <Edit size={22} />
            </button>
            <button onClick={() => onDelete(task.id)} className="task-button">
                <Trash size={22} color="red" />
            </button>
            <span className={`task-text ${task.completed ? "completed" : ""}`}>{task.text}</span>
        </div>
    );
}    

export default TaskItem;