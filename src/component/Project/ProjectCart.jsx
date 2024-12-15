import React from 'react';

const ProjectCart = (
      {
            project: { title, skills, imageSrc, description, demo, source },
      }
) => {
      return (
            <div>
                  <img src={imageSrc} alt={`Image of ${title}`} />
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <ul>
                        {skills.map((skill, id) => (
                              <li key={id}>{skill}</li>

                        ))}
                  </ul>
                  <div>
                        <a href={demo}>Demo</a>
                        <a href={source}>Source</a>
                  </div>
            </div>
      );
}

export default ProjectCart;
