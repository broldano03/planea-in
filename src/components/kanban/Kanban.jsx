import React, { useState } from "react"
import LabelCmi from "../cmi-okr/cmi-okr/LabelCmi"
import IconsItem from "../cmi-okr/items/IconsItem"
import { useItems } from "../../context/ItemsContext"

const Kanban = () => {

    const { keyResults, setKeyResults } = useItems()

    // Estado temporal para almacenar el ID del elemento que se arrastra
    const [draggedItemId, setDraggedItemId] = React.useState(null)

    // Función para manejar el inicio del arrastre
    const handleDragStart = (id) => {
        setDraggedItemId(id)
    }

    // Función para manejar el evento de "drop" en una columna específica
    const handleDrop = (status) => {
        setKeyResults((prevKeyResults) =>
            prevKeyResults.map((item) =>
                item.id === draggedItemId ? { ...item, statusKanban: status } : item
            )
        )
        setDraggedItemId(null); // Resetea el ID del elemento arrastrado
    }

    // Permitir que el elemento se deje caer
    const allowDrop = (event) => {
        event.preventDefault()
    }

    const pendingItems = keyResults.filter((item) => item.statusKanban === "Pendiente")
    const inProcessItems = keyResults.filter((item) => item.statusKanban === "En-Proceso")
    const doneItems = keyResults.filter((item) => item.statusKanban === "Hecho")

    return (
        <div className="flex px-20 space-x-5">
            
            <div
                className="bg-neutral-100 px-8 py-6 rounded-md flex-1"
                onDrop={() => handleDrop("Pendiente")}
                onDragOver={allowDrop}
            >
                <div className="font-semibold mb-2">
                    <h3>Pendiente</h3>
                </div>
                <div>
                    {pendingItems.map((item) => (
                        <div
                            key={item.id}
                            draggable
                            onDragStart={() => handleDragStart(item.id)}
                            className="px-3 pt-4 pb-5 bg-white rounded-md mb-2 cursor-pointer 
                            flex flex-col"
                        >
                            <div className="mt-2 mb-2 ">
                                {item.description}
                            </div>
                            <IconsItem/>
                        </div>
                    ))}
                </div>
            </div>
            <div
                className="bg-neutral-100 px-8 py-6 rounded-md flex-1"
                onDrop={() => handleDrop("En-Proceso")}
                onDragOver={allowDrop}
            >
                <div className="font-semibold mb-2">
                    <h3>En Proceso</h3>
                </div>
                <div>
                    {inProcessItems.map((item) => (
                        <div
                            key={item.id}
                            draggable
                            onDragStart={() => handleDragStart(item.id)}
                            className="px-3 pt-4 pb-5 bg-white rounded-md mb-2 cursor-pointer 
                            flex flex-col"
                        >

                            <div className="mt-2 mb-2">
                                {item.description}
                            </div>
                            <IconsItem/>
                        </div>
                    ))}
                </div>
            </div>
            <div
                className="bg-neutral-100 px-8 py-6 rounded-md flex-1"
                onDrop={() => handleDrop("Hecho")}
                onDragOver={allowDrop}
            >
                <div className="font-semibold mb-2">
                    <h3>Hecho</h3>
                </div>
                <div>
                    {doneItems.map((item) => (
                        <div
                            key={item.id}
                            draggable
                            onDragStart={() => handleDragStart(item.id)}
                            className="px-3 pt-4 pb-5 bg-white rounded-md mb-2 cursor-pointer 
                            flex flex-col"
                        >

                            <div className="mt-2 mb-2">
                                {item.description}
                            </div>
                            <IconsItem/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Kanban


