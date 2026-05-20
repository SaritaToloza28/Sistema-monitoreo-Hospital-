function StatsCard({ title, value, color }) {

  return (

    <div className="
      bg-white
      rounded-2xl
      shadow-lg
      p-6
      hover:shadow-2xl
      transition
      duration-300
    ">

      <p className="text-slate-500 mb-2">
        {title}
      </p>

      <h2 className={`
        text-4xl
        font-bold
        ${color}
      `}>

        {value}

      </h2>

    </div>
  )
}

export default StatsCard