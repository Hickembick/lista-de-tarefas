//*Este componente permite ao usuário criar uma nova tarefa. Ele contém um formulário com um campo de texto para inserir a tarefa e um botão para adicionar.

import React, { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(task);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Adicione uma tarefa"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default TaskForm;
