import { createContext, useState, useContext, ReactNode } from 'react';
import tasksData from '../data/tasks.json';

interface Task {
  title: string;
  description: string;
  completed: boolean;
}

interface TaskContextType {
  incompleteTasks: Task[];
  completedTasks: Task[];
  toggleTaskComplete: (task: Task) => void;
  addTask: (title: string, description: string) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState(tasksData.tasks);

  const incompleteTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  const toggleTaskComplete = (taskToToggle: Task) => {
    setTasks(tasks.map(task => 
      task.title === taskToToggle.title 
        ? { ...task, completed: !task.completed }
        : task
    ));
  };

  const addTask = (title: string, description: string) => {
    const newTask: Task = {
      title,
      description,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <TaskContext.Provider value={{ incompleteTasks, completedTasks, toggleTaskComplete, addTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};
