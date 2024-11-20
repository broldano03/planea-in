import { useItems } from "../../../context/ItemsContext"
import SubHeader from "../header/SubHeader"
import AddIconSup from "../items/superiorItems/AddIconSup"
import Okrs from "./Okrs"

const AspectCmi = () => {

    const { aspectsCmi } = useItems()

    return (
        <>
        <SubHeader title="Cuadro de Mando Integral" subtitle="¡Gestión Estratégica!"/>
        <div className="aspects mx-auto w-[90%] max-w-[1200px] mt-10">
            <div className="text-center">
                {aspectsCmi.map((aspectCmi) => {
                    return (
                        <div key={aspectCmi.id} className="z-10">
                            <div className={`${aspectCmi.color} text-white px-8 py-2 justify-center shadow-md inline-block rounded-md`}>
                                <h2 className="uppercase font-bold">{aspectCmi.title}</h2>
                            </div>
                            <div className="semi-blue pt-3 px-8 -mt-4 mb-10 shadow-md rounded-md">
                                <div className="grid grid-cols-2 gap-4 mt-3 uppercase font-bold text-center">
                                    <h3>Objetivos</h3>
                                    <h3>Resultados Clave</h3>
                                </div>
                                <Okrs aspectCmi={aspectCmi} />
                                <div className='text-left pb-4'>
                                    <AddIconSup aspectCmi={aspectCmi} />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        </>
    )
}

export default AspectCmi