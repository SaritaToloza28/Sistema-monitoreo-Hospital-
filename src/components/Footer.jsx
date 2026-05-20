function Footer() {

  return (

    <footer className="
      bg-slate-900
      text-white
      mt-16
      py-10
      w-full
    ">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-2xl font-bold mb-2">
          Hospital Universitario San Rafael
        </h2>

        <p className="text-slate-400 mb-4">
          Sistema de monitoreo institucional
        </p>

        <div className="
          border-t
          border-slate-700
          pt-4
          flex
          flex-col
          md:flex-row
          justify-between
          gap-4
        ">

          <p className="text-slate-400">
            Proyecto Integrador • Ingeniería de Sistemas
          </p>

          <p className="text-slate-500">
            © 2026 Hospital Status Monitor
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer