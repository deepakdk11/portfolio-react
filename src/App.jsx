import React from "react"
import Header from "./components/Header"

function App() {
  const [darkMode, setDarkMode] = React.useState(false);

    const darkModeHandler = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle("dark");
    }

  return (
    <div>
      <Header darkMode={darkMode} darkModeHandler={darkModeHandler}/>
    </div>
  )
}

export default App
