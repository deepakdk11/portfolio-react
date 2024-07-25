import React from "react"
import Header from "./components/Header"
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";

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
    </div>
  )
}

export default App
