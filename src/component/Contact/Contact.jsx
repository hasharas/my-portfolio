import React from 'react';
import style from "./Contact.module.css"
import gitIcon from "../../assets/contact/githubIcon.png"
import emailIcon from "../../assets/contact/emailIcon.png"
import linkInIcon from "../../assets/contact/linkedinIcon.png"

const Contact = () => {
      return (
            <footer className={style.container}>
                  <div className={style.text}>
                        <h2 >
                              Contact
                        </h2>
                        <p>
                              Feel free to reach out.!
                        </p>
                  </div>
                  <ul className={style.links}>
                        <li className={style.link}>
                              <img src={emailIcon} alt="Email" />
                              <a href="mailto:hasharamsankalpam@gmail.com">hasharamsankalpam@gmail.com</a>

                        </li>
                        <li className={style.link}>
                              <img src={linkInIcon} alt="LinkedIn" />
                              <a href="">hasharamsankalpam@gmail.com</a>
                        </li>
                        <li className={style.link}>
                              <img src={gitIcon} alt="Github" />
                              <a href="">hasharamsankalpam@gmail.com</a>
                        </li>
                  </ul>
            </footer>
      );
}

export default Contact;
