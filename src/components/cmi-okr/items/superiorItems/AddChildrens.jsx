
import { useOperationalPlans } from "../../../../context/OperationalPlansContext"
import ShowItems from "../ShowItems"

const AddChildrens = ({itemsChildren}) => {
    const {operationalPlans, setOperationalPlans} = useOperationalPlans()

    return (
        <>
            <div className="bg-neutral-100 px-4 py-3 rounded-md text-left shadow-lg z-50">
                <h3 className="font-bold">Planes Operativos</h3>
                <div>
                    <ShowItems items={operationalPlans} setItems={setOperationalPlans} 
                    parentId={itemsChildren.id} />
                </div>
            </div>
        </>
    )
}

export default AddChildrens