
import style from "./App.module.css";
import About from "./component/About/About";
import Hero from "./component/Hero/Hero";
import Navbar from "./component/Navbar/Navbar";

function App() {


  return (
    <>
      <div className={style.App}>
        <Navbar />
        <Hero />
        <About />
      </div>

    </>
  )
}

export default App
