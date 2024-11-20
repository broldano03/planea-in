import { useWebSocketConnection } from "../context/WebSocketContext.jsx";
import { useUser } from "../context/UserContext.jsx";
import {getToken} from "./authenticate.js";

const BASE_URL = import.meta.env.VITE_API_URL;

export default function usePlaneaLib() {
  const [ ws ] = useWebSocketConnection();
  const [ user ] = useUser();

  function requireToken() {
    const token = getToken();
    if (!token) {
      throw new Error('User not logged in (token not found)');
    }
    return token;
  }

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

  function deleteObjective(aspect, id) {
    ws.sendAuthenticatedMessage({
      type: 'deleteObjective',
      body: {
        instance: 'devintio',
        aspect,
        id
      }
    });
  }

  function getProfilePictureUrl() {
    return `${BASE_URL}/user/avatars/${user.id}`;
  }

  async function changeProfilePicture(picture) {
    console.log('changing');
    if (!user) {
      throw new Error('User not logged in (user info not found)');
    }

    const token = requireToken();
    const formData = new FormData();
    formData.append('token', token);
    formData.append('file', picture);

    const response = await fetch(`${BASE_URL}/user/avatars/update/${user.id}`, {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      throw new Error('Failed to update profile picture');
    }

    const data = await response.json();

    console.log('changed');
    console.log(data);
  }

  return {
    createObjective,
    deleteObjective,
    getProfilePictureUrl,
    changeProfilePicture
  };
}