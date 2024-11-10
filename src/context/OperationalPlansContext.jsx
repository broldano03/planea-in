import React, { createContext, useContext, useState } from 'react';

const OperationalPlansContext = createContext();

export const OperationalPlansProvider = ({ children }) => {

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

    return (
        <OperationalPlansContext.Provider value={{ operationalPlans, setOperationalPlans }}>
            {children}
        </OperationalPlansContext.Provider>
    )
}

// Hook personalizado para acceder al contexto
export const useOperationalPlans = () => useContext(OperationalPlansContext)
