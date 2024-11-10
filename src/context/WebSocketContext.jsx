import { createContext, useContext, useState } from "react";

const WebSocketContext = createContext(undefined);

// eslint-disable-next-line react/prop-types
export function WebSocketContextProvider({ ws, children }) {
    const state = useState(ws);
    return (
        <WebSocketContext.Provider value={state}>
            {children}
        </WebSocketContext.Provider>
    );
}
export function useWebSocketConnection() {
    return useContext(WebSocketContext);
}