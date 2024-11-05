import Okrs from "./Okrs"

const AspectCmi = ({ objectives, setObjectives, items, setItems }) => {


    return (
        <div className="aspects">
        <div className="pb-8">
            <h1 className="text-center text-black font-bold uppercase text-xl">
                Cuadro de Mando Integral
            </h1>
            <p className="text-center">¡Gestión Estratégica!</p>
        </div>
        <div className="text-center">
            <Okrs objectives={objectives} setObjectives={setObjectives} 
            items={items} setItems={setItems}/>
        </div>
        </div>
    )
}

export default AspectCmi