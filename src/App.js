import React, { useState } from 'react';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="header">
        <h1>ToDoList</h1>
        <button onClick={toggleDarkMode} className="theme-toggle">
          {/* You can use an SVG or icon for dark/light mode */}
          {isDarkMode ? '🌙' : '☀️'}
        </button>
      </div>
      <TodoList />
    </div>
  );
}

export default App;

