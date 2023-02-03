type TodoProps = {
  todo: {
    id: number;
    text: string;
    completed: boolean;
  };
  onComplete: () => void;
  onDelete: () => void;
};

const Todo = ({ todo, onComplete, onDelete }: TodoProps) => {
  return (
    <div className="flex items-center mt-4">
      <input
        type="checkbox"
        className="form-checkbox h-6 w-6 text-indigo-600 transition duration-150 ease-in-out"
        checked={todo.completed}
        onChange={onComplete}
      />
      <div
        className={`ml-4 ${todo.completed ? "line-through text-gray-600" : ""}`}
      >
        {todo.text}
      </div>
      <button
        className="ml-auto bg-red-500 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-full"
        onClick={onDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default Todo;
