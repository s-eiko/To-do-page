import { useState } from "react";

export default function NewTask({ handleAddTask }) {
    const [newTask, setNewTask] = useState();

    function handleChange(event) {
        setNewTask(event.target.value);
    }

    function handleClick() {
        if (newTask.trim() === '') {
            return;
        }
        handleAddTask(newTask);
        setNewTask('');
    }

    return (
        <div className="task-info">
            <textarea
                rows="1"
                cols="40"
                className="input"
                onChange={handleChange}
                value={newTask}
            ></textarea>
            <button
                className="button"
                onClick={handleClick}
            >
                <i className="bi bi-plus"></i>
                Add new Task
            </button>
        </div>
    )
}