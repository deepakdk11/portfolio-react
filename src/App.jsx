import React from "react"
import Header from "./components/Header"
import Home from "./components/Home";

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
    </div>
  )
}

export default App
