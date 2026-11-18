function TaskCard({ task, onDelete, onToggle }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-gray-100 bg-white p-5 shadow-sm">

      {/* Task Information */}
      <div className="flex items-center gap-4">

        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="h-5 w-5 cursor-pointer accent-purple-600"
        />

        <div>
          <h3
            className={`font-semibold text-gray-800 ${
              task.completed ? "line-through text-gray-400" : ""
            }`}
          >
            {task.title}
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            {task.description}
          </p>
        </div>

      </div>

      {/* Task Status and Delete */}
      <div className="flex items-center gap-4">

        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            task.completed
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {task.completed ? "Completed" : "Pending"}
        </span>

        <button
          onClick={() => onDelete(task.id)}
          className="rounded-lg px-3 py-2 text-red-500 hover:bg-red-50"
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default TaskCard;