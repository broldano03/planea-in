import { useItems } from "../../../context/ItemsContext"
import IconsItem from "../items/IconsItem"
import Items from "../items/Items"
import ShowItems from "../items/ShowItems"

const Okrs = ({aspectCmi}) => {
    
    const { aspectsCmi } = useItems()

    const objectives = aspectsCmi
        .filter((aspect) => aspect.cod === aspectCmi.cod)
        .flatMap((aspect) => aspect.objectives)
    
    return (
        <>
        <ul>
            {objectives.map((objective) => {
                const keyResults = objective.keyResults
                return (
                <div key={objective.id}>
                    <div className={`${aspectCmi.bgOkr} mb-5 py-5 mt-6
                    rounded-md grid grid-cols-2 gap-4 items-center`}>
                        <div className="">
                            
                            <div className="px-7 ">
                                <li
                                className={`bg-white cursor-pointer my-3 rounded-[15px] 
                                        text-center p-2 shadow-md transition-transform 
                                        transform hover:scale-105 flex items-center 
                                        `}
                                >
                                    <span className="block whitespace-normal break-words 
                                    break-all text-left px-2">
                                        {objective.description}
                                    </span>
                                    <div className="ml-auto mr-2 " >
                                        <IconsItem />
                                    </div>
                                </li>
                            </div>
                        </div>
                        <div>
                            <div className="px-7  border-neutral-300 border-l-2 py-auto">
                                <Items items={keyResults}/>
                                <ShowItems/>
                            </div>
                            
                        </div>
                    </div>
                </div>
            )})}
        </ul>
        </>
    )
}

export default Okrs