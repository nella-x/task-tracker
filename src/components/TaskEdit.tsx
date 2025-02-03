import { useState } from "react";
import { Task } from "../types";

interface TaskEditProps {
    task: Task;
    editTask: (id: number, newText: string) => void;
    setIsEditing: (isEditing: boolean) => void;
    taskItemStyle: React.CSSProperties; 
    taskTextStyle: React.CSSProperties;
    buttonStyle: React.CSSProperties;
}

const TaskEdit = ({ task, editTask, setIsEditing, taskItemStyle, taskTextStyle, buttonStyle }: TaskEditProps) => {
    const [newText, setNewText] = useState(task.text);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newText.trim()) return;
        editTask(task.id, newText);
        setIsEditing(false);
    };

    return (
        <form onSubmit={handleSubmit} style={taskItemStyle}>
            <input
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                style={taskTextStyle}
            />
            <button type="submit" style={buttonStyle}>Spara</button> 
            <button type="button" onClick={() => setIsEditing(false)} style={buttonStyle}>
                Avbryt
            </button>
        </form>
    );
};

export default TaskEdit;