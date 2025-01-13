export default function CurrentProject({ currentProject, handleDeleteProject }) {
    const formattedDate = new Date(currentProject.dueDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    
    return (
        <div className="current-project">
          <div className="project-info">
            <div className="header-info">
              <h1 className="name">{project.name}</h1>
              <button className="button" onClick={handleDeleteProject}>
                Delete
              </button>
            </div>
            <p>{formattedDate}</p>
            <p>{project.description}</p>
          </div>
        </div>
    );
}