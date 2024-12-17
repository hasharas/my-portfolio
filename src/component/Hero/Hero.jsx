import React from 'react';
import style from './Hero.module.css'
import HeroImg from "../../assets/hero/men1.png"

const Hero = () => {
      return (
            <section className={style.container}>
                  <div className={style.content}>
                        <h1 className={style.title}>
                              Hi, I'm Hashara
                        </h1>
                        <h2 className={style.titleSecond}>
                              I build things for the web
                        </h2>
                        <p className={style.description}>
                              I am a dedicated Software Engineer and Full Stack Developer with one year of experience building innovative, user-focused applications using modern technologies.
                        </p>
                        <a href="mailto:hasharamsankalpam@gmail.com" className={style.contactBtn}>Contact Me</a>

                  </div>
                  <img src={HeroImg} alt="hero" className={style.heroImg} />
                  <div className={style.topBluer} />
                  <div className={style.bottomBlur} />

            </section>
      );
}

export default Hero;
