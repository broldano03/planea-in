import { NavLink } from "react-router-dom"

const Main = () => {
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
                to="/"
                className={({ isActive }) =>
                    isActive ? "text-blue-500 font-bold" : "text-white"
                }
            >
                Matriz Eisenhower
            </NavLink>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? "text-blue-500 font-bold" : "text-white"
                }
            >
                Cerrar Sesión
            </NavLink>
        </nav>
    );
};

export default Main
