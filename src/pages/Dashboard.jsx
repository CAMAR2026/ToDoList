
import { useState, useEffect } from "react";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatsCard from "../components/StatsCard";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";

function Dashboard() {
  // Get saved tasks from LocalStorage
  const [tasks, setTasks] = useState(() => {
    try {
      const savedTasks = localStorage.getItem("tasks");
      return savedTasks ? JSON.parse(savedTasks) : [];
    } catch {
      return [];
    }
  });

  // Control the task form
  const [showForm, setShowForm] = useState(false);

  // Control task filters
  const [filter, setFilter] = useState("All");

  // Save tasks whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  const addTask = (newTask) => {
    setTasks((previousTasks) => [...previousTasks, newTask]);
    setShowForm(false);
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== id)
    );
  };

  // Toggle task completion
  const toggleTask = (id) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // Calculate task statistics
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const pendingTasks = totalTasks - completedTasks;

  // Filter tasks
  const filteredTasks = tasks.filter((task) => {
    if (filter === "Pending") return !task.completed;
    if (filter === "Completed") return task.completed;

    return true;
  });

  return (
    <div className="flex min-h-screen bg-gray-50">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="min-w-0 flex-1">

        {/* Header */}
        <Header onAddTask={() => setShowForm(true)} />

        <div className="p-6 md:p-8">

          {/* Statistics Cards */}
          <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">

            <StatsCard
              title="Total Tasks"
              count={totalTasks}
              icon="📋"
              color="bg-purple-100"
            />

            <StatsCard
              title="Pending Tasks"
              count={pendingTasks}
              icon="⏳"
              color="bg-yellow-100"
            />

            <StatsCard
              title="Completed Tasks"
              count={completedTasks}
              icon="✅"
              color="bg-green-100"
            />

          </div>

          {/* Task Section */}
          <section>

            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-800">
                My Tasks
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Organize and manage your daily activities.
              </p>
            </div>

            {/* Add Task Form */}
            {showForm && (
              <div className="mb-6">
                <TaskForm
                  onAddTask={addTask}
                  onClose={() => setShowForm(false)}
                />
              </div>
            )}

            {/* Task Filters */}
            <div className="mb-6 flex flex-wrap gap-3">

              {["All", "Pending", "Completed"].map((item) => (
                <button
                  key={item}
                  onClick={() => setFilter(item)}
                  className={`rounded-lg border px-5 py-2 text-sm font-medium transition ${
                    filter === item
                      ? "border-purple-600 bg-purple-600 text-white"
                      : "border-gray-200 bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {item}
                </button>
              ))}

            </div>

            {/* Task List */}
            <div className="space-y-4">

              {filteredTasks.length > 0 ? (

                filteredTasks.map((task) => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    onDelete={deleteTask}
                    onToggle={toggleTask}
                  />
                ))

              ) : (

                <div className="rounded-xl border border-gray-200 bg-white p-10 text-center shadow-sm">

                  <div className="mb-3 text-4xl">
                    📝
                  </div>

                  <h3 className="text-lg font-semibold text-gray-800">
                    No tasks found
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    {filter === "All"
                      ? "Add a new task to get started."
                      : `You don't have any ${filter.toLowerCase()} tasks.`}
                  </p>

                  {filter === "All" && (
                    <button
                      onClick={() => setShowForm(true)}
                      className="mt-5 rounded-lg bg-purple-600 px-5 py-2 text-white hover:bg-purple-700"
                    >
                      + Create Your First Task
                    </button>
                  )}

                </div>

              )}

            </div>

          </section>

        </div>
      </main>

    </div>
  );
}

export default Dashboard;
