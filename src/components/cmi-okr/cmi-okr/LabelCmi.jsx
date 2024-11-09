import { useAspects } from "../../../context/AspectsContext"

const LabelCmi = ({aspectCmi}) => {

    const aspectsCmi = useAspects()

    // Buscar el aspecto correspondiente usando el cod
    const selectedAspect = aspectsCmi.find(aspect => aspect.cod === aspectCmi)

    return (
        <div className={`inline-flex items-center justify-center self-start 
        rounded-md ${selectedAspect ? selectedAspect.color : ''} p-2 text-white text-xs`}>
            <span>{selectedAspect ? selectedAspect.title : aspectCmi}</span>
        </div> 
    )
}

export default LabelCmi