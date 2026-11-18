import { useState } from "react";

function TaskForm({ onAddTask, onClose }) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Please enter a task title");
      return;
    }

    const newTask = {
      id: Date.now(),
      title: title,
      description: description,
      completed: false,
    };

    onAddTask(newTask);

    setTitle("");
    setDescription("");

    onClose();
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">

      <h2 className="mb-5 text-xl font-bold text-gray-800">
        Add New Task
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Task Title
          </label>

          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task title"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Description
          </label>

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter task description"
            rows="3"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
          />
        </div>

        <div className="flex gap-3">

          <button
            type="submit"
            className="rounded-lg bg-purple-600 px-5 py-3 font-medium text-white hover:bg-purple-700"
          >
            Add Task
          </button>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg bg-gray-100 px-5 py-3 font-medium text-gray-600 hover:bg-gray-200"
          >
            Cancel
          </button>

        </div>

      </form>
    </div>
  );
}

export default TaskForm;