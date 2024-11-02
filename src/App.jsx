import { useState } from 'react'
import './App.css'
import InputItem from './components/InputItem'


function App() {

  const [items, setItems] = useState({})
  const [itemId, setItemId] = useState(0)

  return (
    <>
      <h1 className='text-3xl text-red-500' >Planea.in</h1>
      <InputItem items={items} setItems={setItems} itemId={itemId} setItemId={setItemId} />
    </>
  )
}

export default App
