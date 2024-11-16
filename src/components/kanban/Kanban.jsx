import { useState } from "react"
import { useItems } from "../../context/ItemsContext"
import CardKanban from "./CardKanban"
import TitleKanban from "./TitleKanban"
import SelectedNivel from "../eisenhower/SelectedNivel"

const Kanban = () => {

    const { keyResults, setKeyResults, projects, setProjects, actions, setActions, tasks, setTasks } = useItems()
    const [selectedNivel, setSelectedNivel] = useState('keyResults')
    const [draggedItemId, setDraggedItemId] = useState(null)

    const handleDragStart = (id) => { setDraggedItemId(id) }

    const updateDraggedItem = (newStatusKanban) => {
        const updateItems = (items, setItems) => {
            const updatedItems = items.map(item => 
                item.id === draggedItemId ? { ...item, statusKanban: newStatusKanban} : item
            )
            setItems(updatedItems);
        }

        switch (selectedNivel) {
            case 'keyResults':
                updateItems(keyResults, setKeyResults);
                break;
            case 'projects':
                updateItems(projects, setProjects);
                break;
            case 'actions':
                updateItems(actions, setActions);
                break;
            case 'tasks':
                updateItems(tasks, setTasks);
                break;
            default:
                break;
        }
    }

    const handleDrop = (e, newStatusKanban) => {
        e.preventDefault()
        updateDraggedItem(newStatusKanban)
        setDraggedItemId(null)
    }

    const allowDrop = (e) => { e.preventDefault() }

    const selectedItems = selectedNivel === 'keyResults' ? keyResults :
    selectedNivel === 'projects' ? projects :
    selectedNivel === 'actions' ? actions :
    tasks
    
    const pendingItems = selectedItems.filter((item) => item.statusKanban === "Pendiente")
    const inProcessItems = selectedItems.filter((item) => item.statusKanban === "En-Proceso")
    const doneItems = selectedItems.filter((item) => item.statusKanban === "Hecho")

    return (
        <>
        <SelectedNivel selectedNivel={selectedNivel} setSelectedNivel={setSelectedNivel} />
        <div className="flex px-20 space-x-5 ">
            
            <div
                className="border-t-2 border-emerald-700 bg-neutral-100 px-8 py-6 rounded-md flex-1 "
                onDrop={(e) => handleDrop(e, "Pendiente")}
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
                onDrop={(e) => handleDrop(e, "En-Proceso")}
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
                onDrop={(e) => handleDrop(e, "Hecho")}
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
        </>
    )
}

export default Kanban
