import { TaskCard } from './TaskCard';
import tasksData from '../data/tasks.json';

export const TaskList = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">Lista de Tareas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasksData.tasks.map((task, index) => (
          <TaskCard key={index} task={task} />
        ))}
      </div>
    </div>
  );
};
