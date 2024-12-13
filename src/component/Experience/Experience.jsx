import React from 'react';
import skills from '../../data/skills.json'
import history from '../../data/history.json';
import style from './Experience.module.css';

const Experience = () => {
      return (
            <section id="experince">

                  <h2>
                        Experience
                  </h2>
                  <div>
                        <div>
                              {skills.map((skill, id) => {
                                    return (
                                          <div key={id}>
                                                <div>
                                                      <img src={skill.imageSrc}
                                                            alt={skill.title} />
                                                </div>
                                                <div>
                                                      <p>{skill.title}</p>
                                                </div>
                                          </div>

                                    )
                              })}
                        </div>
                        <ul>
                              {
                                    history.map((historyItem, id) => {
                                          return (
                                                <li key={id}>

                                                      <img src={historyItem.imageSrc} alt={`${historyItem.organisation} Logo`} />
                                                      <div>
                                                            <h3>
                                                                  {`${historyItem.role}, ${historyItem.organisation}`}
                                                            </h3>
                                                            <p>
                                                                  {`${historyItem.startDate} - ${historyItem.endDate}`}
                                                            </p>
                                                            <ul>
                                                                  {historyItem.experiences.map((experience, id) => {
                                                                        return (
                                                                              <li key={id}>
                                                                                    {experience}
                                                                              </li>
                                                                        )
                                                                  })}
                                                            </ul>
                                                      </div>
                                                </li>
                                          )
                                    })
                              }
                        </ul>
                  </div>
            </section>

      );
}

export default Experience;
