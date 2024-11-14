import { useState } from "react"
import { useItems } from "../../context/ItemsContext"
import CardEisen from "./CardEisen"
import TitleEisen from "./TitleEisen"

const Eisenhower = () => {

    const { keyResults, setKeyResults, projects, setProjects, actions, setActions, tasks, setTasks } = useItems()
    const [selectedCategory, setSelectedCategory] = useState('keyResults')
    const [draggedItemId, setDraggedItemId] = useState(null)

    const filterByImportanceAndUrgency = (items, importance, urgency) => {
        return items.filter(item => 
            (importance === undefined || item.importance === importance) &&
            (urgency === undefined || item.urgency === urgency)
        )
    }

    const handleDragStart = (e, itemId) => {
        setDraggedItemId(itemId)
    }

    const updateDraggedItem = (newImportance, newUrgency) => {
        const updateItems = (items, setItems) => {
            const updatedItems = items.map(item => 
                item.id === draggedItemId ? { ...item, importance: newImportance, urgency: newUrgency } : item
            )
            setItems(updatedItems);
        }

        switch (selectedCategory) {
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

    const handleDrop = (e, newImportance, newUrgency) => {
        e.preventDefault();
        updateDraggedItem(newImportance, newUrgency);
        setDraggedItemId(null);
    }

    const handleDragOver = (e) => {
        e.preventDefault();
    }

    const impAndUrg = (items) => filterByImportanceAndUrgency(items, true, true)
    const impAndNoUrg = (items) => filterByImportanceAndUrgency(items, true, false)
    const noImpAndUrg = (items) => filterByImportanceAndUrgency(items, false, true)
    const noImpAndNoUrg = (items) => filterByImportanceAndUrgency(items, false, false)

    const selectedItems = selectedCategory === 'keyResults' ? keyResults :
                        selectedCategory === 'projects' ? projects :
                        selectedCategory === 'actions' ? actions :
                        tasks

    const cssBoard = "flex-1 rounded-md p-6"
    return (
        <>
        {/* Selector de categoría */}
        <div className="flex items-center flex-1 mb-4 px-20">
            <label className="mr-2">Seleccionar categoría:</label>
            <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)} 
                className="border p-2"
            >
                <option value="keyResults">Resultados Clave </option>
                <option value="projects">Proyectos </option>
                <option value="actions">Acciones </option>
                <option value="tasks">Tareas </option>
            </select>
        </div>

        <div className="flex items-center flex-1 w-full">
            <div className="flex gap-4 py-4 px-20 w-full">

                {/* Cuadrantes */}
                <div 
                    className={`${cssBoard} bg-slate-300`}
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, true, true)}
                >
                    <TitleEisen titleEisen="Urgente e Importante" subtitleEisen="Hacer ahora" />
                    {impAndUrg(selectedItems).map((item) => (
                        <CardEisen itemId={item.id} description={item.description} handleDragStart={handleDragStart} />
                    ))}
                </div>

                <div 
                    className={`${cssBoard} bg-slate-200`}
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, true, false)}
                >
                    <TitleEisen titleEisen="No Urgente e Importante" subtitleEisen="Planificar" />
                    {impAndNoUrg(selectedItems).map((item) => (
                        <CardEisen itemId={item.id} description={item.description} handleDragStart={handleDragStart}  />
                    ))}
                </div>
            </div>
        </div>

        <div className="flex items-center flex-1 w-full">
            <div className="flex gap-4 py-4 px-20 w-full">
                <div 
                    className={`${cssBoard} bg-neutral-200`}
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, false, true)}
                >
                    <TitleEisen titleEisen="Urgente y No Importante" subtitleEisen="Delegar" />
                    {noImpAndUrg(selectedItems).map((item) => (
                        <CardEisen itemId={item.id} description={item.description} handleDragStart={handleDragStart} />
                    ))}
                </div>
                <div 
                    className={`${cssBoard} bg-neutral-300`}
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, false, false)}
                >
                    <TitleEisen titleEisen="No Urgente y No Importante" subtitleEisen="Eliminar" />
                    {noImpAndNoUrg(selectedItems).map((item) => (
                        <CardEisen itemId={item.id} description={item.description} handleDragStart={handleDragStart} />
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}

export default Eisenhower