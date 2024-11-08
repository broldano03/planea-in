import { useState, useEffect } from "react"
import Items from "../cmi-okr/items/Items"

const Kanban = ({ supItems}) => {
    // Estado para almacenar todos los keyResults
    const [keyResults, setKeyResults] = useState([]);

    // Sincroniza keyResults con supItems cuando supItems cambia
    useEffect(() => {
        setKeyResults(supItems.flatMap(supItem => supItem.keyResults || []));
    }, [supItems]);

    return (
        <div className="px-20">
            <div className="bg-neutral-100 px-10 py-5 rounded-md">
                <div className="font-semibold">
                    <h3>Pendiente</h3>
                </div>
                <div>
                    <Items items={keyResults} setItems={setKeyResults} />
                </div>
            </div>
        </div>
    )
}

export default Kanban
