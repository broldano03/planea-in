import { faArrowUp19, faPenToSquare, faTrash, faList, faUser, faCalendar, faBarsStaggered, faWindowMaximize } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import usePlaneaLib from "../../../lib/planealib";

const SubMain = ({aspectCmi, objective}) => {
    const planealib = usePlaneaLib();

    const handleDeleteObjective = () => {
        planealib.deleteObjective(aspectCmi.id, objective.id);
    }

    return (
        <>
        <div className="bg-white rounded-md p-3 shadow-lg z-50 text-left ">
            <div className="rounded-md px-2 py-2 cursor-pointer
            hover:bg-gray-100" >
                <FontAwesomeIcon icon={faWindowMaximize} />
                <span className="ml-2"> Abrir detalles </span>
            </div>
            <div className="rounded-md px-2 py-2 cursor-pointer
            hover:bg-gray-100">
                <FontAwesomeIcon icon={faArrowUp19} />
                <span className="ml-2"> Asignar meta - KPI </span>
            </div>
            <div className="rounded-md px-4 py-2 cursor-pointer
            hover:bg-gray-100" >
                <FontAwesomeIcon icon={faPenToSquare} />
                <span className="ml-2"> Editar ítem </span>
            </div>
            <div className="rounded-md px-4 py-2 cursor-pointer
            hover:bg-gray-100"
            onClick={handleDeleteObjective} >
                <FontAwesomeIcon icon={faTrash}  />
                <span className="ml-2"> Borrar ítem </span>
            </div>
            <div className="rounded-md px-4 py-2 cursor-pointer
            hover:bg-gray-100">
                <FontAwesomeIcon icon={faList} />
                <span className="ml-2"> Agregar hijos </span>
            </div>
            <div className="rounded-md px-4 py-2 cursor-pointer
            hover:bg-gray-100" >
                <FontAwesomeIcon icon={faUser} />
                <span className="ml-2"> Asignar responsable </span>
            </div>
            <div className="rounded-md px-4 py-2 cursor-pointer
            hover:bg-gray-100" >
                <FontAwesomeIcon icon={faCalendar} />
                <span className="ml-2"> Asignar Fechas </span>
            </div>
            <div className="rounded-md px-4 py-2 cursor-pointer
            hover:bg-gray-100" >
                <FontAwesomeIcon icon={faBarsStaggered} />
                <span className="ml-2"> Ver metodologías </span>
            </div>
        </div>
        </>
    )
}

export default SubMain
