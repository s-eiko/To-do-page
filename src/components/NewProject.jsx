import Input from "./Input";

export default function NewProject({ handleSetProject, handleCancelProject }) {
    const name = useRef();
    const description = useRef();
    const urgency = useRef();
    const dueDate = useRef();

    return (
        <div className="project-data">
            <div className="input-area">
                <Input label="Project name" ref={name} type="text"/>
                <Input label="Description" ref={description} type="textarea"/>
                <Input label="Urgency" ref={urgency} type="range"/>
                <Input label="Due date" ref={dueDate} type="date"/>
            </div>
            <div className="button-area">
                <button onClick={handleCancelProject} className="button">Cancel</button>
                <button onClick={handleSetProject} className="button">Save</button>
            </div>
        </div>
    );
}