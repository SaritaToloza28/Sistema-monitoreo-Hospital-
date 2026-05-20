import StatusCard from "../components/StatusCard"
import { systems } from "../data/fakeData"
import IncidentTimeline from "../components/IncidentTimeline"
import { incidents } from "../data/fakeData"
import StatsCard from "../components/StatsCard"
import UptimeChart from "../components/UptimeChart"
import Footer from "../components/Footer"
import logo from "../assets/logo.png"

function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      
      <header className="bg-slate-900 text-white p-5 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          <div className="flex items-center gap-4">

          <img
            src={logo}
            alt="Hospital Logo"
            className="w-14 h-14 object-contain"
          />

          <div>

            <h1 className="text-2xl font-bold">
              Hospital San Rafael
            </h1>

            <p className="text-slate-300 text-sm">
              Sistema de monitoreo
            </p>

          </div>

        </div>

          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition">
            Login Admin
          </button>

        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6">

        <div className="bg-green-500 text-white rounded-2xl p-8 shadow-xl mb-8">

          <h2 className="text-4xl font-bold mb-2">
            Todos los sistemas operativos
          </h2>

          <p className="text-lg">
            Última actualización: hace 2 minutos
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

        <StatsCard
          title="Sistemas"
          value="21"
          color="text-slate-800"
        />

        <StatsCard
          title="Activos"
          value="18"
          color="text-green-500"
        />

        <StatsCard
          title="Warnings"
          value="2"
          color="text-yellow-500"
        />

        <StatsCard
          title="Errores"
          value="1"
          color="text-red-500"
        />

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {systems.map((system) => (

              <StatusCard
                key={system.id}
                system={system}
              />

            ))}

      </div>

      <IncidentTimeline incidents={incidents} />

      <UptimeChart />

      <Footer />

      </main>

      </div>
  )
}

export default Home