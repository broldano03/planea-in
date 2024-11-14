import {Outlet, useNavigate} from "react-router-dom"
import Header from "../cmi-okr/header/Header"
import useWebSocket from "../../hook/useWebSocket.jsx";
import {useEffect, useState} from "react";
import {unsetToken} from "../../lib/authenticate.js";
import {WebSocketContextProvider} from "../../context/WebSocketContext.jsx";
import HeaderApp from "../cmi-okr/header/HeaderApp.jsx";

const Template = () => {
    const navigate = useNavigate();
    const [ user, setUser ] = useState(null);
    const ws = useWebSocket({ handleNoToken: logout });

  function logout() {
    unsetToken();
    setUser(null);
    navigate('/login');
  }

  useEffect(() => {
    if (!ws.lastJsonMessage) return;

    const message = ws.lastJsonMessage;
    switch (message.type) {
      case 'loginSuccess': {
        const user = message.body.user;
        setUser(user);

        console.log(`Successfully logged in as '${user.name}'`)

        // request organization information
        ws.sendAuthenticatedMessage({ type: 'fetchInstance', body: 'devintio' });
        break;
      }
      case 'error': {
        if (message.body.error === 'Invalid access token') {
          logout();
        } else {
          console.error(message.body);
        }
        break;
      }
      default: {
        console.log(`Unhandled message type: '${message.type}' with body: `, message.body);
      }
    }
  }, [ ws.lastJsonMessage ]);

    return (
        <WebSocketContextProvider ws={ws}>
            <Header/>
            <Outlet/>
        </WebSocketContextProvider>
    )
}

export default Template