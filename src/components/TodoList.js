import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Doctor Appointment', completed: true },
    { id: 2, text: 'Meeting at School', completed: false }
  ]);

  const [text, setText] = useState('');
  const [history, setHistory] = useState([]); // Store history of added tasks
  const [showHistory, setShowHistory] = useState(false); // Toggle for showing history

  // Add Task Function
  function addTask(text) {
    const newTask = {
      id: Date.now(),
      text,
      completed: false
    };
    setTasks([...tasks, newTask]);
    setHistory([...history, newTask]); // Add to history
    setText('');
  }

  // Delete Task Function
  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  // Toggle Completed Task
  function toggleCompleted(id) {
    setTasks(
      tasks.map(task => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
  }

  // Toggle History Visibility
  function toggleHistory() {
    setShowHistory(!showHistory);
  }

  return (
    <div className="todo-list">
      {/* Task List */}
      {tasks.map(task => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted}
        />
      ))}

      {/* Input to Add New Task */}
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="New Task"
      />
      
      {/* Add and Show History Buttons */}
      <div className="buttons-container">
        <button onClick={() => addTask(text)}>Add</button>
        <button onClick={toggleHistory} style={{ marginLeft: '10px' }}>
          {showHistory ? 'Hide History' : 'Show History'}
        </button>
      </div>

      {/* Display History */}
      {showHistory && (
        <div className="history">
          <h3>Task History:</h3>
          <ul>
            {history.map((task, index) => (
              <li key={index}>
                {task.text} - {task.completed ? 'Completed' : 'Incomplete'}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default TodoList;
