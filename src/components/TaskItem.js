//*Este componente representa uma tarefa individual. Ele pode exibir o texto da tarefa, seu estado (concluída ou não) e botões para editar e marcar como concluída.

import React from 'react';

function TaskItem({ task, onComplete, onDelete }) {
  return (
    <div>
      <span>{task.text}</span>
      <button onClick={() => onComplete(task.id)}>Concluído</button>
      <button onClick={() => onDelete(task.id)}>Excluir</button>
    </div>
  );
}

export default TaskItem;
