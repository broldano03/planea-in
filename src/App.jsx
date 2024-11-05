import { useState } from 'react'
import './App.css'
import AspectCmi from './components/cmi-okr/AspectCmi'
import { v4 as uuidv4 } from 'uuid'

function App() {

  const [objectives, setObjectives] = useState([
    {
      description: "Incrementar las ventas",
      id: uuidv4(), // ID único
      aspectCmi: "ClientesMercado",
      eliminado: false,
      editable: false,
      startDate: 0,
      endDate: 0,
      subItems: [
        {
          description: "ResultadoClave 1",
          id: uuidv4(),
          aspectCmi: "ClientesMercado",
        },
        {
          description: "ResultadoClave 2",
          id: uuidv4(),
          aspectCmi: "ClientesMercado",
        },
      ],
  }
  ])

  const [items, setItems] = useState([])


  return (
    <>
      <AspectCmi objectives={objectives} setObjectives={setObjectives} />
    </>
  )
}

export default App
