import React from 'react';
import style from "./Project.module.css";
import projects from "../../data/projects.json"
import ProjectCart from './ProjectCart';

const Project = () => {
      return (
            <section className={style.container} id="project">
                  <h2 className={style.title}>Projects</h2>
                  <div className={style.projects}>
                        {projects.map((project, id) => {
                              return <ProjectCart key={id} project={project} />
                        })

                        }
                  </div>
            </section>
      );
}

export default Project;
