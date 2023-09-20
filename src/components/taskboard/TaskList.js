import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="task-list">
      <h2>Task List</h2>
      <ol>
        {tasks.map((task, index) => (
          <TaskItem key={index} task={task} onDelete={() => onDeleteTask(index)} />
        ))}
      </ol>
    </div>
  );
}

export default TaskList;
