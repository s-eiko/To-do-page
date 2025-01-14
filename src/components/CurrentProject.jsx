export default function CurrentProject({ currentProject, handleDeleteProject }) {
  if (!currentProject) return null;

  const formattedDate = new Date(currentProject.dueDate).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
  });
  
  return (
      <div className="current-project">
        <div className="project-info">
          <div className="header-info">
            <h1 className="name">{currentProject.name}</h1>
            <button className="button" onClick={handleDeleteProject}>
              Delete
            </button>
          </div>
          <p>{formattedDate}</p>
          <p>{currentProject.description}</p>
        </div>
      </div>
  );
}