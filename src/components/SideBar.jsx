import { useState, useEffect } from "react";

export default function SideBar({ projects, handleAddProject, handleSelectProject, currentProject }) {
    const [dateStats, setDateStats] = useState([]);

    // Fetching date stats
    useEffect(() => {
        const fetchDateStats = async () => {
            try {
                const response = await fetch('http://worldtimeapi.org/api/ip');

                if (!response.ok) {
                    throw new Error('Error fetching data');
                }

                const result = await response.json();

                var dayOfWeek = result.day_of_week;
                var dayText;
                switch(dayOfWeek) {
                    case 0:
                        dayText = 'Sunday';
                        break;
                    case 1:
                        dayText = 'Monday';
                        break;
                    case 2:
                        dayText = 'Tuesday';
                        break;
                    case 3:
                        dayText = 'Wednesday';
                        break;
                    case 4:
                        dayText = 'Thursday';
                        break;
                    case 5:
                        dayText = 'Friday';
                        break;
                    case 6:
                        dayText = 'Saturday';
                        break;
                }

                var timezoneText = result.timezone;

                setDateStats([dayText, timezoneText]);
            } catch (error) {
                console.error("Error fetching data");
            }
        };

        fetchDateStats();
    }, []);

    return (
        <aside>
            <div id='top-menu'>
                <div id="top-display">
                    <div id="menu-text">
                        Menu
                    </div>
                    <div id="time-stats">
                        <p>{dateStats[0]}</p>
                        <p>{dateStats[1]}</p>
                    </div>
                </div>
                <hr />
                <div id="header-message">
                    Hello there, {localStorage.getItem('name')}!
                </div>
                <button onClick={handleAddProject}>
                    <i className="bi bi-plus"></i>
                    New project
                </button>
            </div>
            <ul id="projects-bar">
                {projects.map((project) => {
                    return (
                        <li key={project.id}>
                            <button
                                className="project"
                                onClick={() => handleSelectProject(project.id)}
                            >
                                {project.name}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
}