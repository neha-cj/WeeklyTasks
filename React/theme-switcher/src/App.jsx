import { useContext, useState } from 'react'
import { ThemeContext, ThemeProvider } from './Components/ThemeContext'

function App() {
  const [count, setCount] = useState(0)
  const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">
          {theme === "light" ? "Light Mode" : "Dark Mode"}
        </h1>
        <button
          onClick={toggleTheme}
          className={`px-4 py-2 rounded transition ${
            theme === "dark"
              ? "bg-gray-700 hover:bg-gray-600 text-white"
              : "bg-purple-600 hover:bg-purple-700 text-white"
          }`}
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
}

export default App
