import Okrs from "./Okrs"

const AspectCmi = ({ objectives, setObjectives}) => {

    return (
        <div className="aspects mx-20">
            <div className="pb-8">
                <h1 className="text-center text-white font-bold uppercase text-xl">
                    Cuadro de Mando Integral
                </h1>
                <p className="text-center text-neutral-300 italic">¡Gestión Estratégica!</p>
            </div>
            <div className="text-center">
                <Okrs objectives={objectives} setObjectives={setObjectives} />
            </div>
        </div>
    )
}

export default AspectCmi