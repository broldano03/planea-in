import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const useAddSupItem = (aspectCmi, setSupItems) => {
    const [inputValue, setInputValue] = useState('')

    const addItem = (supItem) => {
        const newSupItem = {
            description: supItem,
            id: uuidv4(),
            aspectCmi: aspectCmi.cod,
            itemsChildren: [],
        }
        setSupItems((prevSupItems) => [...prevSupItems, newSupItem])
        setInputValue('')
    }

    return {
        inputValue,
        setInputValue,
        addItem
    }
}

export default useAddSupItem
