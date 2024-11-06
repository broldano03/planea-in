import ShowSupItems from "./items/ShowSupItems"

const Okrs = ({ objectives, setObjectives, keyResults, setKeyResults}) => {
    const aspectsCmi = [
        {
            id:1,
            cod: "Financiero",
            title: "Financiero",
            color: "bg-customBlue",
            bgOkr: "light-blue"
        },
        {
            id:2,
            cod: "ClientesMercado",
            title: "Clientes y Mercado",
            color: "bg-customPurple",
            bgOkr: "light-purple"  
        },
        {
            id:3,
            cod: "ProcesosInternos",
            title: "Procesos Internos",
            color: "bg-customGreen",
            bgOkr: "light-green"  
        },
        {
            id:4,
            cod: "AprendizajesCrecimiento",
            title: "Aprendizajes y Crecimiento",
            color: "bg-customBrown",
            bgOkr: "light-brown"  
        }
    ]

    return (
        <>
            {aspectsCmi.map( aspectCmi => {
                // Filtramos los objetivos para que solo se muestren los que tengan el mismo `aspectCmi`
                const filteredObjectives = objectives.filter(
                    (objective) => objective.aspectCmi === aspectCmi.cod
                )

                return (
                    <div key={aspectCmi.id}>
                        <div className={`${aspectCmi.color} text-white px-8 py-2 justify-center inline-block rounded-md`}>
                            <h2 className="uppercase font-bold">{aspectCmi.title}</h2>
                        </div>
                        <div className="semi-blue pt-3 px-8 border-2 -mt-4 mb-10 border-neutral-300 rounded-md">
                            <div className="grid grid-cols-2 gap-4 mt-3 uppercase font-bold text-center">
                                <h3>Objetivo</h3>
                                <h3>Resultados Clave</h3>
                            </div>
                            <ShowSupItems
                                supItems={filteredObjectives} // Pasamos solo los objetivos filtrados
                                setSupItems={setObjectives}
                                aspectCmi={aspectCmi}
                                keyResults={keyResults}
                                setKeyResults={setKeyResults}
                            />
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Okrs