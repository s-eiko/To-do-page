import Tasks from "./Tasks";

export default function CurrentProject({ currentProject, handleDeleteProject, tasks, handleAddTask, handleDeleteTask }) {
  if (!currentProject) return null;

  const formattedDate = new Date(currentProject.dueDate).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
  });

  console.log("Tasks in CurrentProject: " + tasks.length);
  
  return (
    <div className="current-project">
      <div className="project-info">
        <div className="header-info">
          <h1 className="name">{currentProject.name}</h1>
          <button className="button" onClick={handleDeleteProject}>
            Delete project
          </button>
        </div>
        <p>{currentProject.description}</p>
        <p>{formattedDate}</p>
      </div>
      <Tasks tasks={tasks} handleAddTask={handleAddTask} handleDeleteTask={handleDeleteTask}/>
    </div>
  );
}