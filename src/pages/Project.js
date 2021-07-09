import React, { Component } from "react";
import ProjectCard from "../components/ProjectCard"
import {projectData} from "../projectData"

class Project extends Component {
  render() {
    return (
      <article>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {projectData.map((project) => {
            return (
              <ProjectCard
                title = {project.title}
                body = {project.body}
                img = {project.img}
                git = {project.git}
                deploy = {project.deploy}
              />
            )
          })}
        </div>
      </article>
    )
  }
}

export default Project;