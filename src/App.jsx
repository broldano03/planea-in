import { useState } from 'react'
import './App.css'
import { v4 as uuidv4 } from 'uuid'
import AspectCmi from './components/cmi-okr/cmi-okr/AspectCmi'
import Header from './components/cmi-okr/header/Header'
import Kanban from './components/kanban/Kanban'

function App() {

  const [objectives, setObjectives] = useState([
    {
      description: "Aumentar la rentabilidad de la empresa",
      id: 1234,
      aspectCmi: "Financiero",
      keyResults: [
      {
        description: "Incrementar el margen bruto del 45% al 55% al optimizar los costos de producción.",
        id: uuidv4(),
        parentId:1234, // ID único
      },
      {
        description: "Reducir los gastos operativos en un 10% mediante la implementación de procesos de eficiencia en el próximo trimestre.",
        id: uuidv4(),
        parentId: 1234  // ID único
      },
      {
        description: "Aumentar los ingresos de productos de alto margen en un 25% en comparación con el trimestre anterior.",
        id: uuidv4(),
        parentId: 1234  // ID único
      }
    ]
  },
  {
    description: "Mejorar la satisfacción del cliente",
    id: 456,
    aspectCmi: "ClientesMercado",
    keyResults: [{
      description: "Incrementar la puntuación de satisfacción del cliente (NPS) de 65 a 80 para el final del trimestre.",
      id: uuidv4(),
      parentId: 456 // ID único
    },
    {
      description: "Reducir el tiempo promedio de resolución de tickets de soporte de 48 horas a 24 horas.",
      id: uuidv4(),
      parentId: 456 // ID único
    },
    {
      description: "Aumentar la tasa de resolución en la primera llamada del 70% al 85%.",
      id: uuidv4(),
      parentId: 456 // ID único
    }
  ]
},
  {
    description: "Fomentar el desarrollo de habilidades del equipo",
    id: 789,
    aspectCmi: "AprendizajesCrecimiento",
    keyResults: [{
      description: "Asegurar que el 90% del equipo complete al menos 20 horas de formación relevante para su rol en el trimestre.",
      id: uuidv4(),
      parentId: 789 // ID único
    },
    {
      description: "Implementar un programa de mentoría interna, asignando mentores a todos los empleados nuevos y alcanzando un 85% de participación.",
      id: uuidv4(),
      parentId: 789 // ID único
    },
    {
      description: "Aumentar el índice de satisfacción con las oportunidades de aprendizaje y desarrollo del 70% al 85%, medido en una encuesta de fin de trimestre.",
      id: uuidv4(),
      parentId: 789 // ID único
    }
  ]
  }
  ])

  console.log(objectives)

  return (
    <>
      <Header/>
      <Kanban supItems={objectives}/>
      <AspectCmi objectives={objectives} setObjectives={setObjectives}
      />
      
    </>
  )
}

export default App
