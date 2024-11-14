import {NavLink, useNavigate} from "react-router-dom"
import {unsetToken} from "../../lib/authenticate.js";

const Main = () => {
    const navigate = useNavigate();

    return (
        <nav className="flex space-x-6 px-10 mx-10 text-center items-center cursor-pointer"> 
            <NavLink
                to=""
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
