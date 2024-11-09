import { useState } from 'react'
import IconsItem from './IconsItem'
import DotsIcon from './DotsIcon'

const Items = ({ items, setItems}) => {
    const [editingItemId, setEditingItemId] = useState(null)
    const [newDescription, setNewDescription] = useState("")

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
                {items.map((item) => (
                    <li
                        key={item.id}
                        className={`bg-white cursor-pointer my-3 rounded-[15px] 
                                text-center p-2 shadow-md transition-transform 
                                hover:bg-gray-100 flex items-center 
                                z-10`}
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
