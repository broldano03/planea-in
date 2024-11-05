import { faCircleUser, faEllipsisVertical, faListUl} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const IconsItem = () => {
    return (
        <div className="flex space-x-2">
            <FontAwesomeIcon icon={faListUl} className="hover:scale-125 
                transition-transform transform"/>
            <FontAwesomeIcon icon={faCircleUser} className="hover:scale-125 
                transition-transform transform " />
            <FontAwesomeIcon icon={faEllipsisVertical} className="hover:scale-125 
                transition-transform transform " />
        </div>
    )
}

export default IconsItem
