import { useItems } from "../../../context/ItemsContext";

const LabelCmi = ({ keyResultId }) => {
    const {aspectsCmi} = useItems()

    // Buscar el aspecto correspondiente al keyResultId
    const aspectCmi = aspectsCmi.find((aspect) => 
        aspect.objectives.some((objective) => 
            objective.keyResults.some((kr) => kr.id === keyResultId)
        )
    )

    // Si no se encontró, retornar null
    if (!aspectCmi) {
        return null
    }

    return (
        <div className={`inline-flex items-center justify-center self-start 
        rounded-md ${aspectCmi.color} p-2 text-white text-xs`}>
            <span>{aspectCmi.title}</span>
        </div> 
    )
}

export default LabelCmi;
