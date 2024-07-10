import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      const newTask = {
        id: new Date().getTime(),
        text: taskInput.trim(),
      };
      setTasks([...tasks, newTask]);
      setTaskInput('');
    }
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleInputChange = (event) => {
    setTaskInput(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      <div className="task-input">
        <input
          type="text"
          placeholder="Enter a new task"
          value={taskInput}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <ul className="task-list">
        {tasks.length === 0 ? (
          <li>No tasks yet. Add some!</li>
        ) : (
          tasks.map((task) => (
            <li key={task.id}>
              <span>{task.text}</span>
              <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;
