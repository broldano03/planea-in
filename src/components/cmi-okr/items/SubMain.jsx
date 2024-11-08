import { faArrowUp19, faPenToSquare, faTrash, faList, faUser, faCalendar, faBarsStaggered } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SubMain = ({ itemId, handleDeleteItem, handleEditItem }) => {
    return (
        <>
        <div className="bg-white rounded-md p-3 shadow-lg z-50 text-left ">
            <div className="rounded-md px-2 py-2 cursor-pointer
            hover:bg-gray-100" >
                <FontAwesomeIcon icon={faArrowUp19} />
                <span className="ml-2"> Asignar meta - KPI </span>
            </div>
            <div className="rounded-md px-4 py-2 cursor-pointer
            hover:bg-gray-100" onClick={() => handleEditItem(itemId)} >
                <FontAwesomeIcon icon={faPenToSquare} />
                <span className="ml-2"> Editar ítem </span>
            </div>
            <div className="rounded-md px-4 py-2 cursor-pointer
            hover:bg-gray-100" onClick={() => handleDeleteItem(itemId)}>
                <FontAwesomeIcon icon={faTrash}  />
                <span className="ml-2"> Borrar ítem </span>
            </div>
            <div className="rounded-md px-4 py-2 cursor-pointer
            hover:bg-gray-100" >
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
