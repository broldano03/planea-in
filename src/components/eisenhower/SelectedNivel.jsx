const SelectedNivel = ({selectedNivel, setSelectedNivel}) => {
    
    return (
        <>
        <div className="flex items-center flex-1 mb-4 px-20 space-x-4">
            <label className="mr-4 font-bold">SELECCIONA EL NIVEL DE OPERACIÓN:</label>
            {['keyResults', 'projects', 'actions', 'tasks'].map((category) => (
                <button
                key={category}
                onClick={() => setSelectedNivel(category)}
                className={`px-4 py-2 rounded border transition ${
                    selectedNivel === category
                    ? 'bg-black text-white'
                    : 'bg-white text-black hover:bg-gray-200'
                }`}
                >
                {category === 'keyResults' && 'Resultados Clave'}
                {category === 'projects' && 'Proyectos'}
                {category === 'actions' && 'Acciones'}
                {category === 'tasks' && 'Tareas'}
                </button>
            ))}
        </div>
        </>
    )
}

export default SelectedNivel