import React from "react";
import github from "../../assets/images/github.svg";

function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <img src={project.image} alt={project.title} className="project-img"/>
            <div className="project-info">
                <h3><label className="project-title">{project.title}</label></h3>
                <p>{project.description}</p>
                <a className="link-button" href={project.url}>
                    <img src={github} alt="GitHub" />Github
                </a>
                <div className="project-tags">
                    {
                        project.tags.map((tag)=> {
                            return <label className="tag" key={tag}>{tag}</label>;
                        })
                    }
                </div>
            </div>                  
        </div>
    );
}

export default ProjectCard;