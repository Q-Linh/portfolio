import React from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard";

function Projects() {
    var data = require("./ProjectsData.json");
    return (
        <section className="projects" id="projects">
            <h2 className="section-title">Projects</h2>
            <div className="projects-container">
                {
                    data.map((project) => {
                        return <ProjectCard project={project} key={project.title} />;
                    })
                }
            </div>
        </section>
    );
}

export default Projects;