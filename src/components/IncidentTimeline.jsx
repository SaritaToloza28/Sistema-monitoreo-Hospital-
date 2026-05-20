function IncidentTimeline({ incidents }) {

  const statusColors = {
    ACTIVE: "bg-green-500",
    WARNING: "bg-yellow-500",
    ERROR: "bg-red-500"
  }

  return (

    <div className="bg-white rounded-2xl shadow-lg p-8 mt-10">

      <h2 className="text-3xl font-bold text-slate-800 mb-8">
        Historial de Incidentes
      </h2>

      <div className="space-y-6">

        {incidents.map((incident) => (

          <div
            key={incident.id}
            className="flex items-center gap-4 border-b pb-4"
          >

            <div className={`
              w-4
              h-4
              rounded-full
              ${statusColors[incident.status]}
            `}>
            </div>

            <div className="flex-1">

              <h3 className="font-bold text-slate-800">
                {incident.title}
              </h3>

              <p className="text-slate-500 text-sm">
                {incident.time}
              </p>

            </div>

            <span className={`
              text-white
              px-3
              py-1
              rounded-full
              text-sm
              font-bold
              ${statusColors[incident.status]}
            `}>

              {incident.status}

            </span>

          </div>

        ))}

      </div>

    </div>
  )
}

export default IncidentTimeline