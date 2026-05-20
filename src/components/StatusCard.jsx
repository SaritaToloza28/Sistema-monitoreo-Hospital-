import { Activity } from "lucide-react"

function StatusCard({ system }) {

  const statusColors = {
    ACTIVE: "bg-green-500",
    WARNING: "bg-yellow-500",
    ERROR: "bg-red-500"
  }

  const borderColors = {
    ACTIVE: "border-green-500",
    WARNING: "border-yellow-500",
    ERROR: "border-red-500"
  }

  return (

    <div className={`
      bg-white
      rounded-2xl
      shadow-lg
      p-6
      hover:shadow-2xl
      hover:-translate-y-1
      transition-all
      duration-300
      border-l-8
      ${borderColors[system.status]}
    `}>

      <div className="flex justify-between items-start mb-5">

        <div>

          <div className="flex items-center gap-2 mb-2">

            <Activity className="text-slate-700" size={22} />

            <h3 className="text-2xl font-bold text-slate-800">
              {system.name}
            </h3>

          </div>

          <p className="text-slate-500">
            {system.description}
          </p>

        </div>

        <div className={`
          w-4
          h-4
          rounded-full
          ${statusColors[system.status]}
        `}>
        </div>

      </div>

      <div className="flex justify-between items-center">

        <span className={`
          text-white
          px-4
          py-1
          rounded-full
          text-sm
          font-bold
          ${statusColors[system.status]}
        `}>

          {system.status}

        </span>

        <div className="text-right">

          <p className="text-sm text-slate-400">
            Uptime
          </p>

          <p className="font-bold text-slate-700">
            99.8%
          </p>

        </div>

      </div>

      <button className="
        mt-6
        w-full
        bg-slate-900
        text-white
        py-3
        rounded-xl
        hover:bg-slate-700
        transition
      ">

        View Details

      </button>

    </div>
  )
}

export default StatusCard