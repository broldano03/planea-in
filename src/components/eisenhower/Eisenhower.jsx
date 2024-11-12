const Eisenhower = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="grid grid-cols-3 gap-4 w-full max-w-4xl p-4 border-2 border-gray-800">
                {/* Cabeceras superiores */}
                <div></div>
                <div className="col-span-1 text-center font-bold bg-gray-800 text-white py-2">
                    Urgente
                </div>
                <div className="col-span-1 text-center font-bold bg-gray-800 text-white py-2">
                    No Urgente
                </div>

                {/* Cabeceras laterales */}
                <div className="row-span-1 flex items-center justify-center font-bold bg-gray-800 text-white py-2">
                    Importante
                </div>
                

                {/* Cuadrantes */}
                <div className="flex flex-col items-center justify-center p-4 bg-red-200 border border-gray-600">
                    <h3 className="font-bold">Urgente e Importante</h3>
                    <p>Hacer ahora</p>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-green-200 border border-gray-600">
                    <h3 className="font-bold">No Urgente e Importante</h3>
                    <p>Planificar</p>
                </div>

                {/* Cabeceras laterales */}
                <div className="row-span-1 flex items-center justify-center font-bold bg-gray-800 text-white py-2">
                    No Importante
                </div>

                <div className="flex flex-col items-center justify-center p-4 bg-yellow-200 border border-gray-600">
                    <h3 className="font-bold">Urgente y No Importante</h3>
                    <p>Delegar</p>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-blue-200 border border-gray-600">
                    <h3 className="font-bold">No Urgente y No Importante</h3>
                    <p>Eliminar</p>
                </div>
            </div>
        </div>
    )
}

export default Eisenhower