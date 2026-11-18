function Header({ onAddTask }) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 bg-white px-6 py-6 md:px-8">

      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          My Tasks
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Manage your daily tasks and stay productive.
        </p>
      </div>

      <button
        onClick={onAddTask}
        className="rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-purple-700"
      >
        + Add New Task
      </button>

    </header>
  );
}

export default Header;