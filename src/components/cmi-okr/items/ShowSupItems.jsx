import SupItems from './SupItems'
import AddIconSup from './AddIconSup'

//Mostrar items después de agregarlos
const ShowSupItems = ({supItems, setSupItems, aspectCmi, items, setItems, parentId}) => {

    return (
        <>
            <div className='text-center items-center' >
                <SupItems supItems={supItems} setSupItems={setSupItems} aspectCmi={aspectCmi}
                items={items} setItems={setItems}/>
            </div>
            <div className='text-left pb-4'>
                <AddIconSup setSupItems={setSupItems} aspectCmi={aspectCmi} parentId={parentId}/>
            </div>
        </>
    )
}

export default ShowSupItems