import { useState } from "react"
import { useItems } from "../../context/ItemsContext"
import LabelCmi from "../cmi-okr/cmi-okr/LabelCmi"
import IconsItem from "../cmi-okr/items/IconsItem"

const Eisenhower = () => {

    const {keyResults, projects, actions, tasks } = useItems()
    const [selectedCategory, setSelectedCategory] = useState('keyResults')

    const filterByImportanceAndUrgency = (items, importance, urgency) => {
        return items.filter(item => 
            (importance === undefined || item.importance === importance) &&
            (urgency === undefined || item.urgency === urgency)
        )
    }

    const impAndUrg = (items) => filterByImportanceAndUrgency(items, true, true)
    const impAndNoUrg = (items) => filterByImportanceAndUrgency(items, true, false)
    const noImpAndUrg = (items) => filterByImportanceAndUrgency(items, false, true)
    const noImpAndNoUrg = (items) => filterByImportanceAndUrgency(items, false, false)

    const selectedItems = selectedCategory === 'keyResults' ? keyResults :
                        selectedCategory === 'projects' ? projects :
                        selectedCategory === 'actions' ? actions :
                        tasks

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
                <div className="flex-1 rounded-md p-6 bg-slate-300 w-[50%]">
                    <h3 className="font-bold text-xl">Urgente e Importante</h3>
                    <p className="uppercase italic pb-3">Hacer ahora</p>
                    {impAndUrg(selectedItems).map((item) => (
                        <div
                            key={item.id}
                            className="px-6 pt-4 pb-5 bg-white rounded-md mb-2 cursor-pointer 
                            flex flex-col"
                        >
                            <LabelCmi keyResultId={item.id} />
                            <div className="mt-2 mb-2 ">
                                {item.description}
                            </div>
                            <IconsItem/>
                        </div>
                    ))}
                </div>

                <div className="flex-1 rounded-md p-6 bg-slate-200 w-[50%]">
                    <h3 className="font-bold text-xl">No Urgente e Importante</h3>
                    <p className="uppercase italic pb-3">Planificar</p>
                    {impAndNoUrg(selectedItems).map((item) => (
                        <div
                            key={item.id}
                            className="px-6 pt-4 pb-5 bg-white rounded-md mb-2 cursor-pointer 
                            flex flex-col"
                        >
                            <LabelCmi keyResultId={item.id} />
                            <div className="mt-2 mb-2 ">
                                {item.description}
                            </div>
                            <IconsItem/>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <div className="flex items-center flex-1 w-full">
            <div className="flex gap-4 py-4 px-20 w-full">

                {/* Cuadrantes */}
                <div className="flex-1 rounded-md p-6 bg-neutral-200 w-[50%]">
                    <h3 className="font-bold text-xl">Urgente y No Importante</h3>
                    <p className="uppercase italic pb-3">Delegar</p>
                    {noImpAndUrg(selectedItems).map((item) => (
                        <div
                            key={item.id}
                            className="px-6 pt-4 pb-5 bg-white rounded-md mb-2 cursor-pointer 
                            flex flex-col"
                        >
                            <LabelCmi keyResultId={item.id} />
                            <div className="mt-2 mb-2 ">
                                {item.description}
                            </div>
                            <IconsItem/>
                        </div>
                    ))}
                </div>
                <div className="flex-1 rounded-md p-6 bg-neutral-300 w-[50%]">
                    <h3 className="font-bold text-xl">No Urgente y No Importante</h3>
                    <p className="uppercase italic pb-3">Eliminar</p>
                    {noImpAndNoUrg(selectedItems).map((item) => (
                        <div
                            key={item.id}
                            className="px-6 pt-4 pb-5 bg-white rounded-md mb-2 cursor-pointer 
                            flex flex-col"
                        >
                            <LabelCmi keyResultId={item.id} />
                            <div className="mt-2 mb-2 ">
                                {item.description}
                            </div>
                            <IconsItem/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}

export default Eisenhower