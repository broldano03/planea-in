import {NavLink, useNavigate} from "react-router-dom"
import {unsetToken} from "../../lib/authenticate.js"

const Main = () => {
    const navigate = useNavigate();

    return (
        <nav className="flex space-x-6 text-center items-center cursor-pointer mx-auto w-full px-4 sm:px-6 lg:px-8"> 
            <NavLink
                to="/perfil"
                className={({ isActive }) =>
                    isActive ? "text-blue-500 font-bold" : "text-white"
                }
            >
                Perfil
            </NavLink>
            <NavLink
                to="/cuadro-de-mando"
                className={({ isActive }) =>
                    isActive ? "text-blue-500 font-bold" : "text-white"
                }
            >
                Cuadro de Mando
            </NavLink>
            <NavLink
                to="/tablero-kanban"
                className={({ isActive }) =>
                    isActive ? "text-blue-500 font-bold" : "text-white"
                }
            >
                Tablero Kanban
            </NavLink>
            <NavLink
                to="/matriz-eisenhower"
                className={({ isActive }) =>
                    isActive ? "text-blue-500 font-bold" : "text-white"
                }
            >
                Matriz Eisenhower
            </NavLink>
            <span className="text-white" onClick={() => {
                unsetToken();
                navigate('/login');
            }}>
                Cerrar Sesión
            </span>
            
        </nav>
    );
};

export default Main
