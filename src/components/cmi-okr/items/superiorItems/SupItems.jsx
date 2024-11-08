import { useState } from 'react'
import IconsItem from '../IconsItem'
import DotsIcon from '../DotsIcon'
import ShowItems from '../ShowItems'

// Lista de items padre
const SupItems = ({ supItems, setSupItems, aspectCmi}) => {
    const [draggingIndex, setDraggingIndex] = useState(null)

    const handleDragStart = (e, index) => {
        e.dataTransfer.setData('dragIndex', index)
        setDraggingIndex(index)
    }

    const handleDrop = (e, dropIndex) => {
        const dragIndex = parseInt(e.dataTransfer.getData('dragIndex'), 10)

        if (isNaN(dragIndex) || dragIndex === dropIndex) return

        const newSupItems = [...supItems]
        const [movedItem] = newSupItems.splice(dragIndex, 1)
        newSupItems.splice(dropIndex, 0, movedItem)

        setSupItems(newSupItems)
        setDraggingIndex(null)
    }

    const handleDragOver = (e) => {
        e.preventDefault()
    }

    const handleDragEnd = () => {
        setDraggingIndex(null)
    }

    const [keyResults, setKeyResults] = useState(
        supItems.flatMap(
            item => item.keyResults || []
        )
    )

    const handleDeleteItem = (id) => {
        setSupItems((prevItems) => prevItems.filter(supItem => supItem.id !== id));
    }

    return (
        <div>
            <ul>
                {supItems.map((supItem, index) => (
                    <div key={supItem.id}>
                        <div className={`${aspectCmi.bgOkr} mb-5 py-5 mt-6 border-2
                        border-neutral-300 rounded-md grid grid-cols-2 gap-4 items-center`}>
                            <div className="">
                                
                                <div className="px-7 ">
                                    <li
                                    draggable
                                    onDragStart={(evt) => handleDragStart(evt, index)}
                                    onDragOver={handleDragOver}
                                    onDrop={(e) => handleDrop(e, index)}
                                    onDragEnd={handleDragEnd}
                                    className={`bg-white cursor-pointer my-3 rounded-[15px] 
                                            text-center p-2 shadow-md transition-transform 
                                            transform hover:scale-105 flex items-center 
                                            ${draggingIndex === index ? 'bg-blue-400' : ''} `}
                                    >
                                        <DotsIcon/>
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
                                    parentId={supItem.id}/>
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
