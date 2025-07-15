import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projects.map((Project) => ( <ProjectItem
        key={Project.id} name={Project.name} about={Project.about} technologies={Project.technologies}/>
        ))}</div>
    </div>
  );
}

export default ProjectList;
