import React, { useState } from 'react';

function TodoItem({ task, deleteTask, toggleCompleted }) {
  const [alarmTime, setAlarmTime] = useState('');

  function handleChange() {
    toggleCompleted(task.id);
  }

  function setAlarm(e) {
    e.preventDefault();
    const alarmDate = new Date(alarmTime).getTime();
    const currentDate = new Date().getTime();
    
    if (alarmDate > currentDate) {
      const timeLeft = alarmDate - currentDate;
      setTimeout(() => {
        alert(`Alarm for "${task.text}"!`);
      }, timeLeft);
    } else {
      alert('Please set a future time for the alarm.');
    }
  }

  return (
    <div className="todo-item-container">
      <div className="todo-item">
        <input 
          type="checkbox"
          checked={task.completed}
          onChange={handleChange}
        />
        <p>{task.text}</p>
        <button onClick={() => deleteTask(task.id)}>X</button>
      </div>
      {/* Alarm Section */}
      <form onSubmit={setAlarm}>
        <input 
          type="datetime-local"
          value={alarmTime}
          onChange={(e) => setAlarmTime(e.target.value)}
        />
        <button type="submit">Set Alarm</button>
      </form>
    </div>
  );
}

export default TodoItem;
