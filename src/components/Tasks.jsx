import NewTask from "./NewTask";

export default function Tasks({
    tasks,
    handleAddTask,
    handleDeleteTask
}) {
    console.log("Tasks in Tasks: " + tasks.length);

    return (
        <section>
            <h2>Tasks</h2>
            <NewTask handleAddTask={handleAddTask} />
            {tasks.lenght === 0 ? (
                <p>No tasks yet</p>
            ) : (
                <ul className="tasks-section">
                    {tasks.map((task) => (
                        <li key={task.id}>
                            <p>{task.description}</p>
                            <button
                                className="button"
                                onClick={() => handleDeleteTask(task.id)}
                            >
                                Clear task
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}