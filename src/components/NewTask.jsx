import { useState } from "react";

export default function NewTask({ handleAddTask }) {
    const [newTask, setNewTask] = useState();

    function handleChange(event) {
        setNewTask(event.target.value);
    }

    function handleClick() {
        if (enteredTask.trim() === '') {
            return;
        }
        handleAddTask(enteredTask);
        setNewTask('');
    }

    return (
        <div className="task-info">
            <textarea
                cols="30"
                className="input"
                onChange={handleChange}
            ></textarea>
            <button
                className="button"
                onClick={handleClick}
            >
                <i class="bi bi-plus"></i>
                Add new Task
            </button>
        </div>
    )
}