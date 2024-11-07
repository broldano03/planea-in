import AddIconSup from "./AddIconSup"
import SupItems from "./SupItems"


//Mostrar items después de agregarlos
const ShowSupItems = ({supItems, setSupItems, aspectCmi}) => {


    return (
        <>
            <div className='text-center items-center' >
                <SupItems supItems={supItems} setSupItems={setSupItems} 
                aspectCmi={aspectCmi}/>
            </div>
            <div className='text-left pb-4'>
                <AddIconSup setSupItems={setSupItems} 
                aspectCmi={aspectCmi}/>
            </div>
        </>
    )
}

export default ShowSupItems