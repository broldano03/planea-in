import IconsItem from '../IconsItem'
import ShowItems from '../ShowItems'
import { useKeyResults } from '../../../../context/KeyResultsContext'

// Lista de items padre
const SupItems = ({ supItems, setSupItems, aspectCmi}) => {

    const { keyResults, setKeyResults } = useKeyResults()

    const handleDeleteItem = (id) => {
        setSupItems((prevItems) => prevItems.filter(supItem => supItem.id !== id));
    }

    return (
        <div>
            <ul>
                {supItems.map((supItem) => (
                    <div key={supItem.id}>
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
                                            {supItem.description}
                                        </span>
                                        <div className="ml-auto mr-2 " >
                                            <IconsItem itemId={supItem.id} 
                                            handleDeleteItem={handleDeleteItem} />
                                        </div>
                                    </li>
                                </div>
                            </div>
                            <div>
                                <div className="px-7  border-neutral-300 border-l-2 py-auto">
                                    {/* Filtra los items específicos para el supItem actual */}
                                    <ShowItems items={keyResults} setItems={setKeyResults} 
                                    parentId={supItem.id} aspectCmi={supItem.aspectCmi} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default SupItems
