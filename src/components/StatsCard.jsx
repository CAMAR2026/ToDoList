function StatsCard({ title, count, icon, color }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">

      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm font-medium text-gray-500">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-800">
            {count}
          </h2>
        </div>

        <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${color}`}>
          <span className="text-2xl">{icon}</span>
        </div>

      </div>

    </div>
  );
}

export default StatsCard;