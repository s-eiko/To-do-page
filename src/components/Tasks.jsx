import NewTask from "./NewTask";

export default function Tasks({
    tasks,
    handleAddTask,
    handleDeleteTask
}) {
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
                            <p>{tasks.text}</p>
                            <button
                                className="button"
                                onClick={() => handleDeleteTask(task.id)}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}