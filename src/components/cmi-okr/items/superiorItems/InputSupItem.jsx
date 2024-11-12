import { handleAddItemHelper } from "../../../../helpers/handleAddItem"
import { handleKeyDownHelper } from "../../../../helpers/handleKeyDown"
import useAddSupItem from "../../../../hook/useAddSupItem"

const InputSupItem = ({setSupItems, aspectCmi}) => {

    const { inputValue, setInputValue, addItem } = useAddSupItem(aspectCmi, setSupItems)

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

export default InputSupItem