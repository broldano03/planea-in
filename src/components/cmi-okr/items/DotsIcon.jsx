import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'

const DotsIcon = () => {
    return (
        <div
            className="text-zinc-700 cursor-pointer ml-1 mr-2 
                        opacity-0 hover:opacity-100 transition-opacity duration-300"
        >
            <FontAwesomeIcon icon={faEllipsisVertical} />
            <FontAwesomeIcon icon={faEllipsisVertical} />
        </div>
    )
}

export default DotsIcon