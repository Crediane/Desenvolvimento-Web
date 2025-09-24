import { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    const newTask = { id: Date.now(), text: inputValue };
    setTasks([...tasks, newTask]);
    setInputValue('');
  };

  const handleRemoveTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className='container'>
      <h1>To Do List</h1>

      <form className='form' onSubmit={handleAddTask}>
        <input
        type="text"
        placeholder='Digite uma nova tarefa'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        />
        <button type='submit'>Adicionar</button>
      </form>

      <TaskList tasks={tasks} onRemove={handleRemoveTask} />

    </div>
  );
}

export default App;