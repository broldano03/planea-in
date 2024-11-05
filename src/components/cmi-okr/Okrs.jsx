import ShowItems from "./items/ShowItems"

const Okrs = ({ objectives, setObjectives }) => {
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
            {aspectsCmi.map( aspectCmi => (
                <div key={aspectCmi.id} >
                    <div className={`${aspectCmi.color} text-white px-8 py-2 justify-center inline-block rounded-md`}>
                        <h2 className="uppercase font-bold">{aspectCmi.title }</h2>
                    </div>
                    <div className="semi-blue py-3 px-8 border-2 -mt-4 mb-5 border-neutral-300 rounded-md">
                        <div className={`${aspectCmi.bgOkr} mb-7 py-7 mt-6 border-2 border-neutral-300 rounded-md grid grid-cols-2 gap-4`}>
                            <div className="">
                                <h2 className="uppercase font-bold text-center pb-3">Objetivo</h2>
                                <div className="px-7">
                                    <ShowItems items={objectives} setItems={setObjectives}/>
                                </div>
                            </div>
                            <div>
                                <h2 className="uppercase font-bold text-center pb-3">Resultados Clave</h2>
                                <div className="px-7">
                                    <ShowItems items={objectives } setItems={setObjectives}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) )}
        </>
    )
}

export default Okrs