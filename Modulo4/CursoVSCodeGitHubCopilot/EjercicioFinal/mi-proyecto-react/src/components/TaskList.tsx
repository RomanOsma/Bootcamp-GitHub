import { TaskCard } from './TaskCard';
import { useTaskContext } from '../context/TaskContext';

interface TaskListProps {
  type: 'completed' | 'incomplete';
}

export const TaskList = ({ type }: TaskListProps) => {
  const { incompleteTasks, completedTasks, toggleTaskComplete } = useTaskContext();
  const tasks = type === 'completed' ? completedTasks : incompleteTasks;

  return (
    <div className="grid grid-cols-1 gap-4">
      {tasks.map((task, index) => (
        <TaskCard 
          key={index} 
          task={task} 
          onToggleComplete={() => toggleTaskComplete(task)} 
        />
      ))}
    </div>
  );
};
