import {useWebSocketConnection} from "../context/WebSocketContext.jsx";

export default function usePlaneaLib() {
  const ws = useWebSocketConnection();

  function createObjective(aspect, description) {
    ws.sendAuthenticatedMessage({
      type: 'createObjective',
      body: {
        instance: 'devintio',
        aspect,
        description
      }
    });
  }

  return {
    createObjective
  };
}