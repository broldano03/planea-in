import { createContext, useContext, useState, useEffect } from 'react'

const KeyResultsContext = createContext()

export const KeyResultsProvider = ({ children }) => {
    const [keyResults, setKeyResults] = useState([
        {
            description: "Asegurar que el 90% del equipo complete al menos 20 horas de formación relevante para su rol en el trimestre.",
            id: 752,
            parentId: 789, // ID único
            statusKanban: "En-Proceso",
            aspectCmi: "AprendizajesCrecimiento",
            itemsChildren: []
        },
        {
            description: "Implementar un programa de mentoría interna, asignando mentores a todos los empleados nuevos y alcanzando un 85% de participación.",
            id: 753,
            parentId: 789, // ID único
            statusKanban: "Pendiente",
            aspectCmi: "AprendizajesCrecimiento",
            itemsChildren: []
        },
        {
            description: "Aumentar el índice de satisfacción con las oportunidades de aprendizaje y desarrollo del 70% al 85%, medido en una encuesta de fin de trimestre.",
            id: 754,
            parentId: 789, // ID único
            statusKanban: "Hecho",
            aspectCmi: "AprendizajesCrecimiento",
            itemsChildren: []
        },
        {
            description: "Incrementar el margen bruto del 45% al 55% al optimizar los costos de producción.",
            id: 4277,
            parentId:1234, // ID único
            statusKanban: "En-Proceso",
            aspectCmi: "Financiero",
            itemsChildren: []
        },
        {
            description: "Reducir los gastos operativos en un 10% mediante la implementación de procesos de eficiencia en el próximo trimestre.",
            id: 4278,
            parentId: 1234, // ID único
            statusKanban: "Pendiente",
            aspectCmi: "Financiero",
            itemsChildren: []
        },
        {
            description: "Aumentar los ingresos de productos de alto margen en un 25% en comparación con el trimestre anterior.",
            id: 4279,
            parentId: 1234, // ID único
            statusKanban: "En-Proceso",
            aspectCmi: "Financiero",
            itemsChildren: []
        },
        {
            description: "Incrementar la puntuación de satisfacción del cliente (NPS) de 65 a 80 para el final del trimestre.",
            id: 9378,
            parentId: 456, // ID único
            statusKanban: "Pendiente",
            aspectCmi: "ClientesMercado",
            itemsChildren: []
        },
        {
            description: "Reducir el tiempo promedio de resolución de tickets de soporte de 48 horas a 24 horas.",
            id: 9379,
            parentId: 456, // ID único
            statusKanban: "En-Proceso",
            aspectCmi: "ClientesMercado",
            itemsChildren: []
        },
        {
            description: "Aumentar la tasa de resolución en la primera llamada del 70% al 85%.",
            id: 9380,
            parentId: 456, // ID único
            statusKanban: "Hecho",
            aspectCmi: "ClientesMercado",
            itemsChildren: []
        }
    ])

        // Escucha cambios en keyResults y ejecuta algún efecto si es necesario
        useEffect(() => {
            console.log("KeyResults actualizado:", keyResults)
        }, [keyResults])

    return (
        <KeyResultsContext.Provider value={{ keyResults, setKeyResults }}>
            {children}
        </KeyResultsContext.Provider>
    )
}

export const useKeyResults = () => useContext(KeyResultsContext);
