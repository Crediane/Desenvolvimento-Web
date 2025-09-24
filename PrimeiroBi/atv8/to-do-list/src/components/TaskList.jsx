import React from "react";
import TaskItem from "./TaskItem";

function TaskList({tasks, onRemove}) {
    return (
        <ul>
            {tasks.map(task =>(
                <TaskItem key={task.id} task={task} onRemove={onRemove} />
            ))}
        </ul>
    );
}

export default TaskList;