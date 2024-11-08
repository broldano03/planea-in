import {useEffect, useState} from 'react'
import './App.css'
import AspectCmi from './components/cmi-okr/AspectCmi'
import { v4 as uuidv4 } from 'uuid'
import {WebSocketContextProvider} from "./context/WebSocketContext.jsx";
import useWebSocket from "./hook/useWebSocket.jsx";

function App() {
  // Connect to the WebSocket server (specified at .env)
  const ws = useWebSocket();

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
      description: "Minimizar gastos",
      id: uuidv4(),
      parentId: 456 // ID único
    }
  ]
}
  ])

  console.log(objectives)

  // Effect executed every time a message is received through the WebSocket connection
  useEffect(() => {
    if (!ws.lastJsonMessage) return;

    const message = ws.lastJsonMessage;
    const messageType = message.type;
    if (messageType) {
      console.log(`Received ${messageType} message:`, message);
    }
  }, [ ws.lastJsonMessage ]);

  return (
    <WebSocketContextProvider ws={ws}>
      <AspectCmi objectives={objectives} setObjectives={setObjectives} />
    </WebSocketContextProvider>
  )
}

export default App
