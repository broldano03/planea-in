import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'

const InputItem = ({setItems}) => {

    const [inputValue, setInputValue] = useState('')

    const addItem = (item) => {
        const newItem = {
            description: item,
            id: uuidv4(), // ID único

        }

        setItems((prevItems) => [...prevItems, newItem])
        setInputValue('')
    }

    const handleAddItem = () => {
        if (inputValue.trim()) {
                addItem(inputValue)
            }
        }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleAddItem()
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

export default InputItem