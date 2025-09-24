import React from 'react';

function TaskItem({task, onRemove}) {
    return (
        <li>
            <span>{task.text}</span>
            <button onClick={() => onRemove(task.id)}>
                Remover
            </button>
        </li>
    );
}

export default TaskItem