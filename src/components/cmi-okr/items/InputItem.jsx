import { handleAddItemHelper } from "../../../helpers/handleAddItem.js"
import { handleKeyDownHelper } from "../../../helpers/handleKeyDown.js"
import useAddItem from "../../../hook/useAddItem"

const InputItem = ({setItems, parentId, aspectCmi}) => {

    const { inputValue, setInputValue, addItem } = useAddItem(setItems, parentId, aspectCmi)
    
    const handleAddItem = () => { handleAddItemHelper(inputValue, addItem) }

    const handleKeyDown = (e) => { handleKeyDownHelper(e, handleAddItem) }

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