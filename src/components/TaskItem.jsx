//*Este componente representa uma tarefa individual. Ele pode exibir o texto da tarefa, seu estado (concluída ou não) e botões para editar e marcar como concluída.

import React from 'react';
import '../styles/TaskItem.css';

function TaskItem({ task, onComplete, onDelete, completed }) {
  const handleComplete = () => {
    onComplete(task.id);
  };

  return (
    <div className={`task-item ${completed ? 'completed' : ''}`}>
      <span className="task-text">{task.text}</span>
      <button onClick={handleComplete}>Concluído</button>
      <button className="delete" onClick={() => onDelete(task.id)}>
        Excluir
      </button>
    </div>
  );
}

export default TaskItem;

