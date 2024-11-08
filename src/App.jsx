import { useState } from 'react'
import './App.css'
import { v4 as uuidv4 } from 'uuid'
import AspectCmi from './components/cmi-okr/cmi-okr/AspectCmi'
import Header from './components/cmi-okr/header/Header'

function App() {

  const [objectives, setObjectives] = useState([
    {
      description: "Aumentar rentabilidad",
      id: 1234,
      aspectCmi: "Financiero",
      keyResults: [
      {
        description: "Reducir costos operativos",
        id: uuidv4(),
        parentId:1234, // ID único
      },
      {
        description: "Minimizar gastos",
        id: uuidv4(),
        parentId: 1234  // ID único
      }
    ]
  },
  {
    description: "Incrementar la tasa de mercado",
    id: 456,
    aspectCmi: "ClientesMercado",
    keyResults: [{
      description: "Incrementar tasa de satisfacción",
      id: uuidv4(),
      parentId: 456 // ID único
    },
    {
      description: "Incrementar la tasa de recomendación",
      id: uuidv4(),
      parentId: 456 // ID único
    }
  ]
}
  ])

  console.log(objectives)

  return (
    <>
      <Header/>
      <AspectCmi objectives={objectives} setObjectives={setObjectives}
      />
      
    </>
  )
}

export default App
