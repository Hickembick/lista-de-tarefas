//* Este componente será responsável por exibir a lista de tarefas. Ele pode receber uma lista de tarefas como propriedade e mapeá-las para criar uma lista de TaskItem

import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onComplete, onDelete }) {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onComplete={onComplete}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default TaskList;
