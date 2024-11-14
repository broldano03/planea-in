import { useState } from "react"
import { useItems } from "../../context/ItemsContext"
import CardKanban from "./CardKanban"
import TitleKanban from "./TitleKanban"

const Kanban = () => {

    const { keyResults, setKeyResults } = useItems()

    const [draggedItemId, setDraggedItemId] = useState(null)

    const handleDragStart = (id) => { setDraggedItemId(id) }

    const handleDrop = (status) => {
        setKeyResults((prevKeyResults) =>
            prevKeyResults.map((item) =>
                item.id === draggedItemId ? { ...item, statusKanban: status } : item
            )
        )
        setDraggedItemId(null)
    }

    const allowDrop = (e) => { e.preventDefault() }

    const pendingItems = keyResults.filter((item) => item.statusKanban === "Pendiente")
    const inProcessItems = keyResults.filter((item) => item.statusKanban === "En-Proceso")
    const doneItems = keyResults.filter((item) => item.statusKanban === "Hecho")

    return (
        <div className="flex px-20 space-x-5 ">
            <div
                className="bg-neutral-100 px-8 py-6 rounded-md flex-1"
                onDrop={() => handleDrop("Pendiente")}
                onDragOver={allowDrop}
            >
                <TitleKanban titleKanban="Pendiente" />
                <div>
                    {pendingItems.map((item) => (
                        <CardKanban itemId={item.id} 
                        description={item.description} 
                        handleDragStart={handleDragStart} />
                    ))}
                </div>
            </div>
            <div
                className="bg-neutral-100 px-8 py-6 rounded-md flex-1"
                onDrop={() => handleDrop("En-Proceso")}
                onDragOver={allowDrop}
            >
                <TitleKanban titleKanban="En Proceso" />
                <div>
                    {inProcessItems.map((item) => (
                        <CardKanban itemId={item.id} 
                        description={item.description} 
                        handleDragStart={handleDragStart} />
                    ))}
                </div>
            </div>
            <div
                className="bg-neutral-100 px-8 py-6 rounded-md flex-1"
                onDrop={() => handleDrop("Hecho")}
                onDragOver={allowDrop}
            >
                <TitleKanban titleKanban="Hecho" />
                <div>
                    {doneItems.map((item) => (
                        <CardKanban itemId={item.id} 
                        description={item.description} 
                        handleDragStart={handleDragStart} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Kanban
