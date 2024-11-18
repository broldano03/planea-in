import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const useAddItem = (setItems, parentId, aspectCmi) => {
    const [inputValue, setInputValue] = useState('')

    const addItem = (item) => {
        const newItem = {
            description: item,
            id: uuidv4(),
            parentId,
            statusKanban: "Pendiente",
            aspectCmi: aspectCmi,
            itemsChildren: []
        }

        setItems((prevItems) => [...prevItems, newItem])
        setInputValue('')
    }

    return {
        inputValue,
        setInputValue,
        addItem
    }
}

export default useAddItem
