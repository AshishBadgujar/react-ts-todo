import React, { FC, useState, ChangeEvent } from 'react';
import './App.css';
import TodoTask from './components/TodoTask';
import { ITask } from './Interfaces'

const App: FC = () => {
  const [task, setTask] = useState<string>('')
  const [deadline, setDeadline] = useState<number>(0)
  const [todoList, setTodoList] = useState<ITask[]>([])

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value)
    } else {
      setDeadline(Number(event.target.value))
    }
  }

  const addTask = (event: ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask])
    setTask('')
    setDeadline(0)
  }

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter((item) => item.taskName !== taskNameToDelete))
  }
  return (
    <div className="App">
      <nav className="navbar is-warning is-spaced" role="navigation" aria-label="main navigation">
        <div className="navbar-brand container">
          <a className="navbar-item" href="#">
            <img src="https://bulma.io/images/bulma-logo.png" alt="logo" width="112" height="28" />
          </a>
        </div>
      </nav>
      <div className="container">
        <form onSubmit={addTask}>
          <input
            className="input is-medium is-warning"
            type="text"
            name="task"
            value={task}
            placeholder="task..."
            onChange={handleChange} />
          <input
            className="input is-medium is-warning"
            type="number"
            name="deadline"
            value={deadline}
            placeholder="deadline (days)"
            onChange={handleChange} />
          <button className="button is-medium is-warning" type='submit'>Add Task</button>
        </form>
        <div className="cards">
          {todoList.map((item: ITask, key: number) => {
            return <TodoTask key={key} task={item} completeTask={completeTask} />
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
