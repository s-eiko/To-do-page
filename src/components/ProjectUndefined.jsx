export default function ProjectUndefined({ handleAddProject }) {
    return (
        <div id="undefined-project">
            <i className="bi bi-file-earmark-plus"></i>
            <h3>Start a project</h3>
            <p>Please select a project or create a new one</p>
            <button onClick={handleAddProject}>Create new project</button>
        </div>
    );
}