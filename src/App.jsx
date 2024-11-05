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
      keyResults: [],
  }
  ])

  const [items, setItems] = useState([
    { id:1,description: "KR 1" },
    { id:2,description: "KR 2" },
  ])

  // Función para agregar items a subItems
  const addItemsToKeyResults = () => {
    setObjectives((prevObjectives) => 
      prevObjectives.map((obj) => ({
        ...obj,
        keyResults: items, // Agrega items a KR
      }))
    );
  };


  return (
    <>
      <AspectCmi objectives={objectives} setObjectives={setObjectives} 
      items={items} setItems={setItems} />
      
    </>
  )
}

export default App
