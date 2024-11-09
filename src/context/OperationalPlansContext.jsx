import React, { createContext, useContext, useState, useEffect } from 'react';
import { useKeyResults } from './KeyResultsContext';

const OperationalPlansContext = createContext();

export const OperationalPlansProvider = ({ children }) => {
    const { keyResults } = useKeyResults();

    // Estado inicial de operationalPlans
    const [operationalPlans, setOperationalPlans] = useState([
        {
            description: "Plan operativo para aumentar ventas",
            id: 1,
            keyResultId: 4279,
        },
        {
            description: "Plan operativo para mejorar soporte",
            id: 2,
            keyResultId: 9379,
        },
        {
            description: "Segundo Plan para mejorar soporte",
            id: 99,
            keyResultId: 9379,
        },
        {
            description: "Plan operativo para capacitación",
            id: 3,
            keyResultId: 752,
        },
    ])

    // Filtra operationalPlans por keyResults si es necesario
    const filteredOperationalPlans = operationalPlans.filter(plan =>
        keyResults.some(kr => kr.id === plan.keyResultId)
    )

    return (
        <OperationalPlansContext.Provider value={{ operationalPlans: filteredOperationalPlans, setOperationalPlans }}>
            {children}
        </OperationalPlansContext.Provider>
    );
};

// Hook personalizado para acceder al contexto
export const useOperationalPlans = () => useContext(OperationalPlansContext)
