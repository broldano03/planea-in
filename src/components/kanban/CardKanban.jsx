import LabelCmi from "../cmi-okr/cmi-okr/LabelCmi"
import IconsItem from "../cmi-okr/items/IconsItem"

const CardKanban = ({itemId, description, handleDragStart}) => {
    
    return (
        <>
        <div
            key={itemId}
            draggable
            onDragStart={() => handleDragStart(itemId)}
            className="px-3 pt-4 pb-5 bg-white rounded-md mb-2 cursor-pointer 
            flex flex-col"
        >
            <LabelCmi keyResultId={itemId} />
            <div className="mt-2 mb-2 ">
                {description}
            </div>
            <IconsItem/>
        </div>
        </>
    )
}

export default CardKanban