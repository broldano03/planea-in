import { useState } from 'react'
import './App.css'
import AspectCmi from './components/cmi-okr/AspectCmi'
import { v4 as uuidv4 } from 'uuid'

function App() {

  const [objectives, setObjectives] = useState([
    {
      description: "Aumentar rentabilidad",
      id: uuidv4(),
      aspectCmi: "Financiero",
      items: [{
        description: "Reducir costos operativos",
        id: uuidv4(),
        parentId:1, // ID único
        aspectCmi: "Financiero",
      },
      {
        description: "Minimizar gastos",
        id: uuidv4(),
        parentId:1, // ID único
        aspectCmi: "Financiero",
      },
    ]

  },
  {
    description: "Incrementar la tasa de mercado",
    id: uuidv4(),
    aspectCmi: "ClientesMercado",
    keyResults: [{
      description: "Incrementar tasa de satisfacción",
      id: uuidv4(),
      parentId:2, // ID único
      aspectCmi: "ClientesMercado",
    },
    {
      description: "Minimizar gastos",
      id: uuidv4(),
      parentId:2, // ID único
      aspectCmi: "ClientesMercado",
    },
  ]
}
  ])

  const [items, setItems] = useState([])

  return (
    <>
      <AspectCmi objectives={objectives} setObjectives={setObjectives} 
      items={items} setItems={setItems} />
      
    </>
  )
}

export default App
