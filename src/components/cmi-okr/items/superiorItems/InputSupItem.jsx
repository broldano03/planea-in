import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'

const InputSupItem = ({setSupItems, aspectCmi}) => {

    const [inputValue, setInputValue] = useState('')

    const addSupItem = (supItem) => {
        const newSupItem = {
            description: supItem,
            id: uuidv4(),
            aspectCmi: aspectCmi.cod,
            keyResults: [],
        }

        setSupItems((prevSupItems) => [...prevSupItems, newSupItem])
        setInputValue('')
    }
    
    const handleAddSupItem = () => {
        if (inputValue.trim()) {
                addSupItem(inputValue)
            }
        }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleAddSupItem()
        }
    }

    return (
        <>
        <div  >
            
            <input 
                className="py-2 px-3 text-black bg-slate-100 rounded-md" 
                name="text"
                type="text"
                placeholder="Redacta aquí"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown} /> 
            
        </div>
        </>
    )
}

export default InputSupItem