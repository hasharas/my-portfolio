
import style from "./App.module.css";
import About from "./component/About/About";
import Experience from "./component/Experience/Experience";
import Hero from "./component/Hero/Hero";
import Navbar from "./component/Navbar/Navbar";

function App() {


  return (
    <>
      <div className={style.App}>
        <Navbar />
        <Hero />
        <About />
        <Experience />
      </div>

    </>
  )
}

export default App
