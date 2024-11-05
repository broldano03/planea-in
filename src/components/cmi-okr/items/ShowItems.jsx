import InputItem from './InputItem'
import Items from './Items'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { useState, useRef } from 'react'

//Mostrar items después de agregarlos
const ShowItems = ({items, setItems}) => {

    const [showInput, setShowInput] = useState(false)
    const inputRef = useRef(null)

    const toggleInputVisibility = () => {
        setShowInput(true)
    }

    const handleBlur = (e) => {
        // Si el foco sale de `InputItem`, se oculta
        if (inputRef.current && !inputRef.current.contains(e.relatedTarget)) {
            setShowInput(false)
        }
    }

    return (
        <div className='text-center items-center' >
            <Items items={items} setItems={setItems} />
            <button onClick={toggleInputVisibility} className="text-xl">
                <FontAwesomeIcon icon={faPlusCircle} className="text-neutral-400 hover:scale-125 
                transition-transform transform" />
            </button>
            {showInput && (
                <div ref={inputRef} tabIndex="0" onBlur={handleBlur}>
                    <InputItem setItems={setItems} />
                </div>
            )}
        </div>
    )
}

export default ShowItems
