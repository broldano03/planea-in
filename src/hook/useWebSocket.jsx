import _useWebSocket from "react-use-websocket";
import { getToken } from "../lib/authenticate";
import { useEffect, useState } from "react";

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
                    if (options && options.handleNoToken) {
                        options.handleNoToken();
                    }
                    return;
                }
                _hook.sendJsonMessage({ type: 'login', body: token });
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
        const token = getToken();
        if (!token) {
            console.error('Token expired?');
            return;
        }
        sendMessage({ ...message, accessToken: token });
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