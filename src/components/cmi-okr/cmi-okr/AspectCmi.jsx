import Okrs from "./Okrs"

const AspectCmi = ({ objectives, setObjectives}) => {

    return (
        <div className="aspects mx-20">
            <div className="pb-8">
                <h1 className="text-center  text-neutral-900 font-bold uppercase text-2xl">
                    Cuadro de Mando Integral
                </h1>
                <p className="text-center text-neutral-700 italic">¡Gestión Estratégica!</p>
            </div>
            <div className="text-center">
                <Okrs objectives={objectives} setObjectives={setObjectives} />
            </div>
        </div>
    )
}

export default AspectCmi