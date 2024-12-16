
import style from "./App.module.css";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import Experience from "./component/Experience/Experience";
import Hero from "./component/Hero/Hero";
import Navbar from "./component/Navbar/Navbar";
import Project from "./component/Project/Project";

function App() {


  return (
    <>
      <div className={style.App}>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Project />
        <Contact />
      </div>

    </>
  )
}

export default App
