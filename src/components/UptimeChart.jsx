import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"

const data = [
  { day: "Lun", uptime: 99.8 },
  { day: "Mar", uptime: 99.7 },
  { day: "Mié", uptime: 99.9 },
  { day: "Jue", uptime: 99.5 },
  { day: "Vie", uptime: 99.8 },
  { day: "Sáb", uptime: 100 },
  { day: "Dom", uptime: 99.9 },
]

function UptimeChart() {

  return (

    <div className="
      bg-white
      rounded-2xl
      shadow-lg
      p-8
      mt-10
    ">

      <div className="mb-6">

        <h2 className="text-3xl font-bold text-slate-800">
          Disponibilidad del Sistema
        </h2>

        <p className="text-slate-500">
          Uptime semanal del hospital
        </p>

      </div>

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <XAxis dataKey="day" />

            <YAxis domain={[99, 100]} />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="uptime"
              stroke="#22c55e"
              strokeWidth={4}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  )
}

export default UptimeChart