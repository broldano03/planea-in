import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle} from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"

const InputItem = ({items, setItems, itemId, setItemId}) => {

    const [inputValue, setInputValue] = useState('')

    const addItem = (item) => {
        const newItem = {
            objective: item,
            idOkr: itemId,
            realizado: false,
            eliminado: false,
            editable: false,
            aspectCmi: aspectCmi,
            overallProgress: overallProgress,
            startDate: 0,
            endDate: 0,
            keyResult: {},
            stateKanban: stateKanban,
            classificationEisenhower: classificationEisenhower
        }

        setItems((prevItems) => {[...prevItems, newItem]})
        setItemId((prevId) => prevId + 1)
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
            <div className="agregar-tarea">
                <input
                    type="text"
                    placeholder="Agregar una tarea"
                    className="input-tarea"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <FontAwesomeIcon icon={faPlusCircle} className="enter" onClick={handleAddItem} />
            </div>

            
        </> 
    )
}

export default InputItem