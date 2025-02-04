import { Square, SquareCheck, Trash, Edit } from "lucide-react";
import { useState } from "react";
import { Task } from "../types";

interface TaskEditProps {
    task: Task;
    editTask: (id: number, newText: string) => void;
    setIsEditing: (isEditing: boolean) => void;
    onToggleComplete: (id: number) => void;
    onDelete: (id: number) => void; 
}

const TaskEdit = ({ task, editTask, setIsEditing, onToggleComplete, onDelete }: TaskEditProps) => {
    const [newText, setNewText] = useState(task.text);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newText.trim()) return;
        editTask(task.id, newText);
        setIsEditing(false);
    };

    return (
        <form onSubmit={handleSubmit} className={`task-edit-form ${task.completed ? "completed" : ""}`}>
            <div className="task-buttons">
                <button onClick={() => onToggleComplete(task.id)} type="button" className="task-button">
                    {task.completed ? <SquareCheck size={22} color="green" /> : <Square size={22} />}
                </button>
                <button type="button" className="task-button">
                    <Edit size={22} />
                </button>
                <button onClick={() => onDelete(task.id)} type="button" className="task-button">
                    <Trash size={22} color="red" />
                </button>
            </div>

            <input
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                className="task-edit-input"
            />

            <div className="task-edit-actions">
                <button type="submit" className="task-edit-button">Save</button>
                <button type="button" onClick={() => setIsEditing(false)} className="task-edit-button">
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default TaskEdit;
