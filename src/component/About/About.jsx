import React from 'react';
import style from './About.module.css'
import men2 from "../../assets/hero/men2.png"

const About = () => {
      return (
            <section>
                  <h2>
                        About
                  </h2>
                  <div>
                        <img src={men2} alt="" />
                  </div>
            </section>
      );
}

export default About;
