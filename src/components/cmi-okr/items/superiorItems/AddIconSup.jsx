import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useState, useRef} from 'react'
import InputSupItem from './InputSupItem'
import usePlaneaLib from '../../../../lib/planealib.js'

const AddIconSup = ({aspectCmi}) => {

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
        <>
        <button onClick={toggleInputVisibility} className={`${aspectCmi.color} 
        px-10 py-1 rounded-md text-1`}>
            <FontAwesomeIcon icon={faPlus} className="text-white
            hover:scale-125 transition-transform transform" />
        </button>
        {showInput && (
            <div ref={inputRef} tabIndex="0" onBlur={handleBlur}>
                <InputSupItem aspectCmi={aspectCmi}/>
            </div>
        )}
        </>
    )
}

export default AddIconSup