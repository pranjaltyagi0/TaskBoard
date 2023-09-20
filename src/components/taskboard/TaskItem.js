import React from 'react';

function TaskItem({ task, onDelete }) {
  return (
    <li className="task-item">
      {task.title} - {task.description}
      <button style={{ height: 'auto', width: 'auto', margin: 5, 'background-color': '#66b3ff' }} onClick={onDelete}>Delete</button>
    </li>
  );
}

export default TaskItem;
