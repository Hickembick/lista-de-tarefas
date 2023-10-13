//* Este componente será responsável por exibir a lista de tarefas. Ele pode receber uma lista de tarefas como propriedade e mapeá-las para criar uma lista de TaskItem

import React, { useState } from 'react';
import TaskItem from './TaskItem';
import '../styles/TaskList.css';


function TaskList({ tasks, onComplete, onDelete }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar tarefas..."
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <div className='lista' >
        {filteredTasks.map((task) => (
          <div className="task-added">
            <TaskItem
              key={task.id}
              task={task}
              onComplete={onComplete}
              onDelete={onDelete}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;

