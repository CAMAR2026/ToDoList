function Sidebar() {
  return (
    <aside className="hidden md:flex w-64 shrink-0 min-h-screen flex-col border-r border-gray-200 bg-white p-6">

      <div className="mb-12">
        <h1 className="text-3xl font-extrabold text-purple-600">
          TaskFlow.
        </h1>
        <p className="mt-2 text-sm text-gray-400">
          Manage your productivity
        </p>
      </div>

      <nav className="space-y-3">
        <a href="#" className="flex items-center gap-3 rounded-xl bg-purple-100 px-4 py-3 font-semibold text-purple-700">
          📋 All Tasks
        </a>

        <a href="#" className="flex items-center gap-3 rounded-xl px-4 py-3 text-gray-600 hover:bg-gray-100">
          ⏳ Pending
        </a>

        <a href="#" className="flex items-center gap-3 rounded-xl px-4 py-3 text-gray-600 hover:bg-gray-100">
          ✅ Completed
        </a>
      </nav>

      <div className="mt-auto rounded-xl bg-purple-50 p-5">
        <h3 className="font-bold text-gray-800">
          Stay Productive!
        </h3>
        <p className="mt-2 text-sm leading-6 text-gray-500">
          Organize your tasks and achieve your daily goals.
        </p>
      </div>

    </aside>
  );
}

export default Sidebar;