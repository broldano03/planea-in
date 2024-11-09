import { useAspects } from "../../../context/AspectsContext"
import ShowSupItems from "../items/superiorItems/ShowSupItems"

const Okrs = ({ objectives, setObjectives}) => {
    
    const aspectsCmi = useAspects()

    return (
        <>
            {aspectsCmi.map( aspectCmi => {
                // Filtramos los objetivos para que solo se muestren los que tengan el mismo `aspectCmi`
                const filteredObjectives = objectives.filter(
                    (objective) => objective.aspectCmi === aspectCmi.cod
                )

                return (
                    <div key={aspectCmi.id} className="z-10" >
                        <div className={`${aspectCmi.color} text-white px-8 py-2 justify-center shadow-md inline-block rounded-md `}>
                            <h2 className="uppercase font-bold">{aspectCmi.title}</h2>
                        </div>
                        <div className="semi-blue pt-3 px-8 -mt-4 mb-10 shadow-md rounded-md">
                            <div className="grid grid-cols-2 gap-4 mt-3 uppercase font-bold text-center">
                                <h3>Objetivo</h3>
                                <h3>Resultados Clave</h3>
                            </div>
                            <ShowSupItems
                                supItems={filteredObjectives} // Pasamos solo los objetivos filtrados
                                setSupItems={setObjectives}
                                aspectCmi={aspectCmi}
                            />
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Okrs