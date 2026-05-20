export const systems = [
  
  {
    id: 1,
    name: "Historia Clínica Electrónica",
    status: "ACTIVE",
    description: "Sistema funcionando correctamente"
  },

  {
    id: 2,
    name: "Sistema de Facturación",
    status: "WARNING",
    description: "Lentitud intermitente"
  },

  {
    id: 3,
    name: "API Laboratorio",
    status: "ERROR",
    description: "Servicio temporalmente caído"
  },

  {
    id: 4,
    name: "Servidor Principal",
    status: "ACTIVE",
    description: "Funcionamiento normal"
  },

  {
    id: 5,
    name: "Sistema de Citas",
    status: "ACTIVE",
    description: "Servicio estable"
  }
]

export const incidents = [
  {
    id: 1,
    title: "Caída API laboratorio",
    time: "Hace 15 minutos",
    status: "ERROR"
  },

  {
    id: 2,
    title: "Lentitud en facturación",
    time: "Hace 40 minutos",
    status: "WARNING"
  },

  {
    id: 3,
    title: "Sistema restaurado",
    time: "Hace 1 hora",
    status: "ACTIVE"
  }
]