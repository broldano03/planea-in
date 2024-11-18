import './App.css'
import AspectCmi from './components/cmi-okr/cmi-okr/AspectCmi'
import ChatBox from "./components/chat/ChatBox.jsx"

function App() {

  return (
    <>
      <AspectCmi/>

      {/* Floating chat box */}
      <div className="fixed bottom-2 right-2">
        <ChatBox />
      </div>
    </>
  )
}

export default App
