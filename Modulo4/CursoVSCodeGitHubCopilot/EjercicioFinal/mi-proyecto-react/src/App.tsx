import React from 'react';
import { TaskProvider } from './context/TaskContext';
import TaskLists from './components/TaskLists';

function App() {
  return (
    <TaskProvider>
      <div className="App">
        <h1>Gestor de Tareas</h1>
        <TaskLists />
      </div>
    </TaskProvider>
  );
}

export default App;
