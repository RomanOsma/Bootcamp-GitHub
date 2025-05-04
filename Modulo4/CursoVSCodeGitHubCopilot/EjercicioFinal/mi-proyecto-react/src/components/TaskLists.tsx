import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';

const TaskLists: React.FC = () => {
  const { incompleteTasks, completedTasks, toggleTaskComplete, addTask } = useTaskContext();
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTitle.trim() && newDescription.trim()) {
      addTask(newTitle.trim(), newDescription.trim());
      setNewTitle('');
      setNewDescription('');
    }
  };

  const formStyle = {
    marginBottom: '20px',
    display: 'flex',
    gap: '10px',
    padding: '10px',
    backgroundColor: '#f0f0f0',
    borderRadius: '4px'
  };

  const inputStyle = {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ddd'
  };

  const buttonStyle = {
    padding: '8px 16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  };

  const taskStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '5px',
    margin: '5px 0',
    borderRadius: '4px',
    backgroundColor: '#f5f5f5',
    color: '#000000'
  };

  const checkboxStyle = {
    width: '20px',
    height: '20px',
    cursor: 'pointer',
    accentColor: '#4CAF50'
  };

  return (
    <div style={{ padding: '1rem' }}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Título de la tarea"
          style={inputStyle}
        />
        <input
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          placeholder="Descripción"
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Agregar Tarea</button>
      </form>

      <div style={{ display: 'flex', gap: '2rem' }}>
        <div style={{ flex: 1 }}>
          <h2>Tareas Pendientes</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {incompleteTasks.map(task => (
              <li key={task.title} style={taskStyle}>
                <input
                  type="checkbox"
                  checked={false}
                  onChange={() => toggleTaskComplete(task)}
                  style={checkboxStyle}
                />
                <span style={{ color: '#000000' }}>{task.title} - {task.description}</span>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ flex: 1 }}>
          <h2>Tareas Completadas</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {completedTasks.map(task => (
              <li key={task.title} style={taskStyle}>
                <input
                  type="checkbox"
                  checked={true}
                  onChange={() => toggleTaskComplete(task)}
                  style={checkboxStyle}
                />
                <span style={{ textDecoration: 'line-through', color: '#000000' }}>
                  {task.title} - {task.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TaskLists;
