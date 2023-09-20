import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task, index) => (
          <TaskItem key={index} task={task} onDelete={() => onDeleteTask(index)} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
