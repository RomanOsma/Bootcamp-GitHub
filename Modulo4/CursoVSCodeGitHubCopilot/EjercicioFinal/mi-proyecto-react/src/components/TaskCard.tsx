interface Task {
  title: string;
  description: string;
  completed: boolean;
}

interface TaskProps {
  task: Task;
  onToggleComplete: () => void;
}

export const TaskCard = ({ task, onToggleComplete }: TaskProps) => {
  return (
    <div className={`p-4 rounded-lg shadow-md ${task.completed ? 'bg-green-100' : 'bg-white'}`}>
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-semibold">{task.title}</h3>
        <button
          onClick={onToggleComplete}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => {}}
            className="h-5 w-5 text-blue-600"
          />
        </button>
      </div>
      <p className="text-gray-600">{task.description}</p>
    </div>
  );
};
