
import { useState } from 'react'
import IconsItem from './IconsItem'
import DotsIcon from './DotsIcon'

// Lista de items
const Items = ({ items, setItems }) => {
    const [draggingIndex, setDraggingIndex] = useState(null)

    const handleDragStart = (e, index) => {
        e.dataTransfer.setData('dragIndex', index)
        setDraggingIndex(index)
        console.log(`Started dragging item at index ${index}`)
    }

    const handleDrop = (e, dropIndex) => {
        const dragIndex = parseInt(e.dataTransfer.getData('dragIndex'), 10)

        if (isNaN(dragIndex) || dragIndex === dropIndex) return

        const newItems = [...items]
        const [movedItem] = newItems.splice(dragIndex, 1)
        newItems.splice(dropIndex, 0, movedItem)

        setItems(newItems)
        setDraggingIndex(null)
    }

    const handleDragOver = (e) => {
        e.preventDefault()
    }

    const handleDragEnd = () => {
        setDraggingIndex(null)
        console.log("Drag ended")
    }

    
    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li
                        key={item.id} draggable
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
                        <span className="block whitespace-normal break-words">
                            {item.description}
                        </span>
                        <div className="ml-auto mr-2" >
                            <IconsItem />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Items
