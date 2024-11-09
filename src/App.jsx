import './App.css'
import AspectCmi from './components/cmi-okr/cmi-okr/AspectCmi'
import ChatBox from "./components/chat/ChatBox.jsx"
import { useObjectives } from './context/ObjectivesContext.jsx'

function App() {

  const { objectives, setObjectives } = useObjectives()

  return (
    <>
      <AspectCmi objectives={objectives} setObjectives={setObjectives}
      />

      {/* Floating chat box */}
      <div className="fixed bottom-2 right-2">
        <ChatBox />
      </div>
    </>
  )
}

export default App
