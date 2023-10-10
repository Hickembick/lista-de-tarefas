import React, { useState } from 'react';
import './styles/App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  
  const addTask = (text) => {
    const newTask = {
      id: Math.random().toString(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const completeTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onComplete={completeTask} onDelete={deleteTask} />
    </div>
  );
}

export default App;
