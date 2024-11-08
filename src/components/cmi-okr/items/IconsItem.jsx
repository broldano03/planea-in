import { faCircleUser, faEllipsisVertical} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SubMain from "./SubMain"
import { useRef, useState } from "react"

const IconsItem = ({ itemId, handleDeleteItem, handleEditItem }) => {

    const [isSubMainVisible, setIsSubMainVisible] = useState(false)
    const buttonRef = useRef(null)
    const subMainRef = useRef(null)

    const toggleSubMain = () => {
        if (buttonRef.current && subMainRef.current) {
            const rect = buttonRef.current.getBoundingClientRect()
            
            // Ajustar las coordenadas dinámicamente usando variables CSS
            subMainRef.current.style.setProperty("--sub-main-top", `${rect.bottom + window.scrollY}px`)
            subMainRef.current.style.setProperty("--sub-main-left", `${rect.left - window.scrollX - 10}px`)
        }
        setIsSubMainVisible(!isSubMainVisible);
    }

    return (
        <div >
            <div className="space-x-2 z-10">
                <FontAwesomeIcon icon={faCircleUser} className="hover:scale-125 
                    transition-transform transform " />
                <button onClick={toggleSubMain} >
                    <FontAwesomeIcon icon={faEllipsisVertical} className="hover:scale-125 
                    transition-transform transform" 
                    />
                </button>
                    
            </div>

            {isSubMainVisible && (
                <div
                    ref={subMainRef}
                    tabIndex={-1}
                    onBlur={() => setIsSubMainVisible(false)}
                    className="sub-main-position rounded-md w-max"
                >
                    <SubMain itemId={itemId} 
                    handleDeleteItem={handleDeleteItem} 
                    handleEditItem={handleEditItem} />
                </div>
            )}
        </div>
    )
}

export default IconsItem
