import LogoPlanea from '../../public/icon-planea.svg'
import {useEffect, useState} from "react";
import {getToken, setToken} from "../lib/authenticate.js";
import {useNavigate} from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  async function login(event) {
    event.preventDefault();
    event.stopPropagation();

    if (!username || !password) {
      setErrorMessage('Especifica un usuario y contraseña');
      return;
    }

    const response = await fetch(import.meta.env.VITE_API_URL + '/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username.trim(),
        password: password.trim()
      })
    });
    if (response.ok) {
      const json = await response.json();
      setToken(json['token']);
      redirect();
      setErrorMessage(null);
    } else {
      setErrorMessage(await response.text());
    }
  }

  useEffect(() => {
    const accessToken = getToken();
    if (accessToken !== null) {
      // why are you trying to log in then, redirect
      redirect();
    } else {
      setLoaded(true);
    }
  }, []);

  function redirect() {
    navigate('/');
  }

  return (
      <div className="h-full bg-white">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
                alt="Planea Software"
                src={LogoPlanea}
                className="mx-auto h-10 w-auto"
            />
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
              Inicia sesión en Planea
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                  Nombre de Usuario
                </label>
                <div className="mt-2">
                  <input
                      id="username"
                      name="username"
                      type="text"
                      required
                      autoComplete="username"
                      placeholder='dummy'
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                      value={username}
                      onChange={e => setUsername(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                    Contraseña
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      ¿Olvidaste tu contraseña?
                    </a>
                  </div>
                </div>
                <div className="my-2">
                  <input
                      id="password"
                      name="password"
                      type="password"
                      placeholder='dummy'
                      required
                      autoComplete="current-password"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                  />
                </div>

                <p className="text-center text-red-500 text-sm">{errorMessage}</p>

                <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={login}
                >
                  Iniciar Sesión
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm/6 text-gray-500">
              ¿Aún no tienes una cuenta?{' '}
              <a href="/register" className="font-semibold text-indigo-600 hover:text-indigo-500 cursor-pointer">
                Regístrate gratis
              </a>
            </p>
          </div>
          <div className='text-center my-5'>
            <h3 className='font-bold'>
              Accede a una demostración con:
            </h3>
            <p>Usuario: dummy</p>
            <p>Contraseña: dummy </p>
          </div>
        </div>
      </div>
  )
}
