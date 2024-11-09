import { faArrowUp19, faPenToSquare, faTrash, faList, faUser, faCalendar, faBarsStaggered } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { useOperationalPlans } from "../../../context/OperationalPlansContext"
import AddChildrens from "./superiorItems/AddChildrens"

const SubMain = ({ itemId, handleDeleteItem, handleEditItem }) => {

    const {operationalPlans} = useOperationalPlans()

    // Estado para controlar la visibilidad del popup
    const [isPopupVisible, setIsPopupVisible] = useState(false)

    // Función para abrir el popup
    const openPopup = () => setIsPopupVisible(true)

    // Función para cerrar el popup
    const closePopup = () => setIsPopupVisible(false)

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
            hover:bg-gray-100" onClick={openPopup} >
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

            {/* Popup de AddChildrens */}
            {isPopupVisible && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                        
                        {/* Aquí se puede añadir cualquier contenido para agregar hijos */}
                        <AddChildrens itemsChildren={operationalPlans} />

                        {/* Botón para cerrar el popup */}
                        <div className="text-center mt-4">
                            <button
                                onClick={closePopup}
                                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default SubMain
