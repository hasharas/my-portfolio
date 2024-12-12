import React from 'react';
import style from './About.module.css';
import men2 from "../../assets/about/hasara.png";
import cursorIcon from "../../assets/about/cursorIcon.png";
import serverIcon from "../../assets/about/serverIcon.png";
import uiIcon from "../../assets/about/uiIcon.png";

const About = () => {
      return (
            <section className='style.container'>
                  <h2 className="style.title">
                        About
                  </h2>
                  <div className='style.content'>
                        <img src={men2} alt="lap with me" className='style.aboutImg' />
                        <ul className='style.aboutItems'>
                              <li className='style.aboutItem'>
                                    <img src={cursorIcon} alt="" />
                                    <div className='aboutItemText'>
                                          <h3>Frontend Developer</h3>
                                          <p>
                                                I'm a frontend developer with experience in bulding responsive and optimized sites
                                          </p>
                                    </div>
                              </li>
                              <li className='style.aboutItem'>
                                    <img src={serverIcon} alt="" />
                                    <div className='aboutItemText'>
                                          <h3>Backend Developer</h3>
                                          <p>
                                                I have experience developing fast and backend and optimized back-end systems and Apis
                                          </p>
                                    </div>
                              </li>
                              <li className='style.aboutItem'>
                                    <img src={uiIcon} alt="" />
                                    <div className='aboutItemText'>
                                          <h3>Data Bases</h3>
                                          <p>
                                                I have experience work with database and AWS s3..
                                          </p>
                                    </div>
                              </li>
                        </ul>
                  </div>
            </section>
      );
}

export default About;
