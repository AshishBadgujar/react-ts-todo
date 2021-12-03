import React from 'react'
import { ITask } from '../Interfaces'
interface Props {
    task?: ITask,
    completeTask(taskNameToDelete: string): void;
}
const TodoTask = ({ task, completeTask }: Props) => {
    return (
        <div className="card">
            <p>{task?.taskName} ({task?.deadline} days)</p>
            <button className="delete is-large" onClick={() => completeTask(task?.taskName!)}></button>
        </div>
    )
}

export default TodoTask
