import SupItems from './SupItems'
import AddIconSup from './AddIconSup'

//Mostrar items después de agregarlos
const ShowSupItems = ({supItems, setSupItems, aspectCmi}) => {

    return (
        <>
            <div className='text-center items-center' >
                <SupItems supItems={supItems} setSupItems={setSupItems} aspectCmi={aspectCmi}/>
            </div>
            <div>
                <AddIconSup setSupItems={setSupItems}/>
            </div>
        </>
    )
}

export default ShowSupItems