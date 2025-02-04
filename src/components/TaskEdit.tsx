import { useState } from "react";
import { Task } from "../types";

interface TaskEditProps {
    task: Task;
    editTask: (id: number, newText: string) => void;
    setIsEditing: (isEditing: boolean) => void;
}

const TaskEdit = ({ task, editTask, setIsEditing }: TaskEditProps) => {
    const [newText, setNewText] = useState(task.text);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newText.trim()) return;
        editTask(task.id, newText);
        setIsEditing(false);
    };

    return (
        <form onSubmit={handleSubmit} className="task-edit-form">
            <input
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                className="task-edit-input"
            />
            <button type="submit" className="task-edit-button">Spara</button> 
            <button type="button" onClick={() => setIsEditing(false)} className="task-edit-button">
                Avbryt
            </button>
        </form>
    );
};

export default TaskEdit;
