import React from 'react';
import skills from '../../data/skills.json'
import history from '../../data/history.json';
import style from './Experience.module.css';

const Experience = () => {
      return (
            <section id="experince" className={style.container} >

                  <h2 className={style.title}>
                        Experience
                  </h2>
                  <div className={style.content}>
                        <div className={style.skills}>
                              {skills.map((skill, id) => {
                                    return (
                                          <div key={id} className={style.skill}>
                                                <div className={style.skillImageContainer}>
                                                      <img src={skill.imageSrc}
                                                            alt={skill.title}
                                                            className={style.skillImage} />
                                                </div>
                                                <div className={style.skillTitlediv}>
                                                      <p className={style.skillTitle}>{skill.title}</p>
                                                </div>
                                          </div>

                                    )
                              })}
                        </div>
                        <ul className={style.history}>
                              {
                                    history.map((historyItem, id) => {
                                          return (
                                                <li key={id} className={style.historyItem}>

                                                      <a href="https://techwavedy.com/"><img src={historyItem.imageSrc} alt={`${historyItem.organisation} Logo`} /></a>

                                                      <div className={style.historyItemDetails}>
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
