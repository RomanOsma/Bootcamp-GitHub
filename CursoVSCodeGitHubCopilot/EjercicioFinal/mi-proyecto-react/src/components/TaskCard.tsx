interface Task {
  title: string;
  description: string;
  completed: boolean;
}

interface TaskCardProps {
  task: Task;
}

export const TaskCard = ({ task }: TaskCardProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 p-4 bg-white">
      <h3 className={`text-xl font-bold mb-2 ${task.completed ? 'line-through text-gray-500' : ''}`}>
        {task.title}
      </h3>
      <p className="text-gray-700 text-base">
        {task.description}
      </p>
      <div className="mt-4">
        <span className={`px-2 py-1 rounded ${task.completed ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'}`}>
          {task.completed ? 'Completada' : 'Pendiente'}
        </span>
      </div>
    </div>
  );
};
