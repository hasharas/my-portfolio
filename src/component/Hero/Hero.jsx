import React from 'react';
import style from './Hero.module.css'
import HeroImg from "../../assets/hero/heroImage.png"

const Hero = () => {
      return (
            <section className={style.container}>
                  <div className={style.content}>
                        <h1 className={style.title}>
                              Hi, I'm Hashara
                        </h1>
                        <p className={style.description}>
                              I'm full satck developer ,with one year experience using react and node js and more
                        </p>
                        <a href="hasharamsankalpam@gmail.com" className={style.contactBtn}>Contact Me</a>

                  </div>
                  <img src={HeroImg} alt="hero" className={style.heroImg} />
                  <div className={style.topBluer} />
                  <div className={style.bottomBlur} />

            </section>
      );
}

export default Hero;
