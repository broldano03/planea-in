import _useWebSocket from "react-use-websocket";
import { getToken } from "../lib/authenticate";
import { useEffect, useState } from "react";

// export interface WebSocketConnection {
    // sendJsonMessage: SendJsonMessage,
    // sendAuthenticatedMessage: (message: ServerBoundMessage<any>) => void,
    // sendMessage: (message: ServerBoundMessage<any>) => void;
    // lastMessage: ClientBoundMessage<any> | null;
    // lastJsonMessage: any;
    // readyState: ReadyState
// }

// export interface WebSocketOptions {
//     handleNoToken: () => void
// }

export default function useWebSocket(options /*: WebSocketOptions */) /*: WebSocketConnection*/ {

    const [ lastMessage, setLastMessage ] = useState(null);
    const wsUrl = import.meta.env.VITE_WEB_SOCKET_URI;
    if (!wsUrl) {
        throw new Error('No WebSocket URL specified in environment variables,' +
            ' did you forget to put it on .env.local file?');
    }

    const _hook = _useWebSocket(
        wsUrl,
        {
            onOpen: () => {
                const token = getToken();
                if (!token) {
                    if (options) {
                        options.handleNoToken();
                    }
                    return;
                }
                // No auth yet
                _hook.sendJsonMessage({
                    type: 'login',
                    body: 'no auth yet'
                });
                console.log('Successfully connected to web-socket server');
            },
            reconnectAttempts: 10_000,
            shouldReconnect: () => true
        }
    );

    useEffect(() => {
        const lastJsonMessage = _hook.lastJsonMessage;
        // TODO validate
        setLastMessage(lastJsonMessage);
    }, [ _hook.lastJsonMessage ]);

    function sendMessage(message) {
        _hook.sendJsonMessage(message);
    }

    function sendAuthenticatedMessage(message /*: ServerBoundMessage<any>*/) {
        // No auth yet!
        /*const token = getToken();
        if (!token) {
            // TODO: Handle
            console.error('Token expired?');
            return;
        }*/
        sendMessage({
            ...message,
            accessToken: 'no auth yet'
        });
    }

    return {
        sendJsonMessage: _hook.sendJsonMessage,
        sendAuthenticatedMessage,
        sendMessage,
        lastJsonMessage: _hook.lastJsonMessage,
        lastMessage,
        readyState: _hook.readyState
    };
}