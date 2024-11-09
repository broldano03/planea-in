import React, { createContext, useContext, useState } from 'react'
import { useKeyResults } from './KeyResultsContext'

const ObjectivesContext = createContext()

export const ObjectivesProvider = ({ children }) => {
    const { keyResults} = useKeyResults()

    const [objectives, setObjectives] = useState([
        {
            description: "Aumentar la rentabilidad de la empresa",
            id: 1234,
            aspectCmi: "Financiero",
            supItemsChildren: keyResults
        },
        {
            description: "Mejorar la satisfacción del cliente",
            id: 456,
            aspectCmi: "ClientesMercado",
            supItemsChildren: keyResults
        },
        {
            description: "Fomentar el desarrollo de habilidades del equipo",
            id: 789,
            aspectCmi: "AprendizajesCrecimiento",
            supItemsChildren: keyResults
        }
    ])

    // Proporcionar tanto los objetivos como la función para actualizarlos
    return (
        <ObjectivesContext.Provider value={{ objectives, setObjectives }}>
            {children}
        </ObjectivesContext.Provider>
    )
}

// Hook personalizado para acceder al contexto
export const useObjectives = () => useContext(ObjectivesContext)
