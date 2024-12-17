import React from 'react';
import style from './About.module.css';
import men2 from "../../assets/about/men3.png";
import cursorIcon from "../../assets/about/cursorIcon.png";
import serverIcon from "../../assets/about/serverIcon.png";
import dbIcon from "../../assets/about/uiIcon.png";

const About = () => {
      return (
            <section className={style.container} id='about'>
                  <h2 className={style.title}>
                        About
                  </h2>
                  <div className={style.content}>
                        <img src={men2} alt="lap with me" className={style.aboutImg} />
                        <ul className={style.aboutItems}>
                              <li className={style.aboutItem}>
                                    <img src={cursorIcon} alt="cursor image" />
                                    <div className={style.aboutItemText}>
                                          <h3>Frontend Developer</h3>
                                          <p>
                                                I'm a frontend developer specializing in crafting responsive, optimized, and visually engaging web experiences.
                                          </p>
                                    </div>
                              </li>
                              <li className={style.aboutItem}>
                                    <img src={serverIcon} alt="server image" />
                                    <div className={style.aboutItemText}>
                                          <h3>Backend Developer</h3>
                                          <p>
                                                I have experience building efficient, scalable back-end systems and APIs optimized for performance and reliability
                                          </p>
                                    </div>
                              </li>
                              <li className={style.aboutItem}>
                                    <img src={dbIcon} alt="database image" />
                                    <div className={style.aboutItemText}>
                                          <h3>Data Bases</h3>
                                          <p>
                                                I have experience working with databases, ensuring efficient storage, retrieval, and optimization.
                                          </p>
                                    </div>
                              </li>
                        </ul>
                  </div>
            </section>
      );
}

export default About;
