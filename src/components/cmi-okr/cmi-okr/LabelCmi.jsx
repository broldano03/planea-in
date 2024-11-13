import { useItems } from "../../../context/ItemsContext"

const LabelCmi = () => {

    const aspectsCmi = useItems()

    return (
        <div className={`inline-flex items-center justify-center self-start 
        rounded-md ${aspectsCmi.color} p-2 text-white text-xs`}>
            <span>{aspectsCmi.cod}</span>
        </div> 
    )
}

export default LabelCmi