//*Este componente representa uma tarefa individual. Ele pode exibir o texto da tarefa, seu estado (concluída ou não) e botões para editar e marcar como concluída.

import React, { useState } from 'react';
import './TaskItem.css'; // Importe o arquivo CSS

function TaskItem({ task, onComplete, onDelete }) {
  const [completed, setCompleted] = useState(false);

  const handleComplete = () => {
    onComplete(task.id);
    setCompleted(!completed);
  };

  return (
    <div className={`task-item ${completed ? 'completed' : ''}`}>
      <span className="task-text">{task.text}</span>
      <button onClick={handleComplete}>Concluído</button>
      <button onClick={() => onDelete(task.id)}>Excluir</button>
    </div>
  );
}

export default TaskItem;

