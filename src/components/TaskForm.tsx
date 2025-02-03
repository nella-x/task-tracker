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

  const formStyle = {
    backgroundColor: "#ffffcc",
    border: "1px solid #ccc",
    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
    borderRadius: "8px",
    display: "flex", 
  };

  const inputStyle = {
    flexGrow: 1,
    padding: "4px",
    border: "1px solid #ccc",
    fontSize: "18px", 
  };

  const buttonStyle = {
    backgroundColor: "transparent", 
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What's next?..."
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle}>
        <CirclePlus size={30} />
      </button>
    </form>
  );
};

export default TaskForm;
