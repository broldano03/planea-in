import SupItems from './SupItems'
import AddIconSup from './AddIconSup'

//Mostrar items después de agregarlos
const ShowSupItems = ({supItems, setSupItems, aspectCmi, keyResults, setKeyResults}) => {


    return (
        <>
            <div className='text-center items-center' >
                <SupItems supItems={supItems} setSupItems={setSupItems} 
                aspectCmi={aspectCmi}
                keyResults={keyResults} setKeyResults={setKeyResults}/>
            </div>
            <div className='text-left pb-4'>
                <AddIconSup setSupItems={setSupItems} aspectCmi={aspectCmi}/>
            </div>
        </>
    )
}

export default ShowSupItems