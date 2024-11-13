import {Outlet, useNavigate} from "react-router-dom"
import Header from "../cmi-okr/header/Header"
import useWebSocket from "../../hook/useWebSocket.jsx";
import {useEffect, useState} from "react";
import {unsetToken} from "../../lib/authenticate.js";

const Template = () => {
    const navigate = useNavigate();
    const [ user, setUser ] = useState(null);
    const ws = useWebSocket({ handleNoToken: logout });

  function logout() {
    unsetToken();
    setUser(null);
    navigate('/');
  }

  useEffect(() => {
    if (!ws.lastJsonMessage) return;

    const message = ws.lastJsonMessage;
    switch (message.type) {
      case 'loginSuccess': {
        const user = message.body.user;
        setUser(user);
        console.log(`Successfully logged in as '${user.name}'`)
        break;
      }
      case 'error': {
        if (message.body.error === 'Invalid authentication token') {
          logout();
        } else {
          console.error(message.body);
        }
        break;
      }
    }
  }, [ ws.lastJsonMessage ]);

    return (
        <>
            <Header/>
            <Outlet/>
        </>
    )
}

export default Template