import { useState } from "react";
import { CirclePlus } from "lucide-react"; 

interface TaskFormProps {
  addTask: (text: string) => void;
}

const TaskForm = ({ addTask }: TaskFormProps) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTask(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What's next?... "
        className="task-input"
      />
      <button type="submit" className="task-button task-button-circle">
        <CirclePlus size={30} />
      </button>
    </form>
  );
};

export default TaskForm;
