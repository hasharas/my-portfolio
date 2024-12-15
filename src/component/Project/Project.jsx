import React from 'react';
import style from "./Project.module.css";
import projects from "../../data/projects.json"
import ProjectCart from './ProjectCart';

const Project = () => {
      return (
            <section>
                  <h2>Projects</h2>
                  <div>
                        {projects.map((project, id) => {
                              return <ProjectCart key={id} project={project} />
                        })

                        }
                  </div>
            </section>
      );
}

export default Project;
