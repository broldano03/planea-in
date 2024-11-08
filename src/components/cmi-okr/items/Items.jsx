import { useState } from 'react'
import IconsItem from './IconsItem'
import DotsIcon from './DotsIcon'

const Items = ({ items, setItems}) => {
    const [draggingIndex, setDraggingIndex] = useState(null)
    const [editingItemId, setEditingItemId] = useState(null)
    const [newDescription, setNewDescription] = useState("")

    const handleDragStart = (e, index) => {
        e.dataTransfer.setData('dragIndex', index)
        setDraggingIndex(index)
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

    const handleDragOver = (e) => { e.preventDefault() }
    const handleDragEnd = () => { setDraggingIndex(null) }

    const handleDeleteItem = (id) => {
        setItems((prevItems) => prevItems.filter(item => item.id !== id))
    }

    const handleEditItem = (id) => {
        const itemToEdit = items.find(item => item.id === id)
        setEditingItemId(id)
        setNewDescription(itemToEdit.description)
    }

    const handleSaveEdit = (id) => {
        const updatedItems = items.map(item => 
            item.id === id ? { ...item, description: newDescription } : item)
        setItems(updatedItems)
        setEditingItemId(null)
        setNewDescription("")
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
                                hover:bg-gray-100 flex items-center 
                                ${draggingIndex === index ? 'bg-blue-400' : ''} z-10`}
                    >
                        <DotsIcon/>
                        {editingItemId === item.id ? (
                            <div className="flex items-center">
                                <input
                                    type="text" value={newDescription}
                                    onChange={(e) => setNewDescription(e.target.value)}
                                    className="border w-max rounded p-1"
                                />
                                <button onClick={() => handleSaveEdit(item.id)} className="ml-2 text-green-500 hover:text-green-700">
                                    Guardar
                                </button>
                            </div>
                        ) : (
                            <span className="block whitespace-normal break-words">
                                {item.description}
                            </span>
                        )}
                        <div className="ml-auto mr-2">
                            <IconsItem 
                                itemId={item.id} 
                                handleDeleteItem={handleDeleteItem} 
                                handleEditItem={handleEditItem} 
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Items
