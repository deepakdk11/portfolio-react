import React from "react"
import Header from "./components/Header"
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = React.useState(false);

    const darkModeHandler = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle("dark");
    }

  return (
    <div className="font-outfit">
      <Header darkMode={darkMode} darkModeHandler={darkModeHandler}/>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
