import React, { createContext, useContext } from 'react';

const AspectsContext = createContext();

const aspectsCmi = [
    {
        id:1,
        cod: "Financiero",
        title: "Financiero",
        color: "bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600",
        bgOkr: "light-blue"
    },
    {
        id:2,
        cod: "ClientesMercado",
        title: "Clientes y Mercado",
        color: "bg-gradient-to-br from-fuchsia-900 via-fuchsia-850 to-fuchsia-600",
        bgOkr: "light-purple"  
    },
    {
        id:3,
        cod: "ProcesosInternos",
        title: "Procesos Internos",
        color: "bg-gradient-to-br from-teal-800 via-teal-700 to-teal-600",
        bgOkr: "light-green"  
    },
    {
        id:4,
        cod: "AprendizajesCrecimiento",
        title: "Aprendizajes y Crecimiento",
        color: "bg-gradient-to-br from-sky-950 via-sky-900 to-sky-700",
        bgOkr: "light-brown"  
    }
]

// Proveedor de contexto
export const AspectsProvider = ({ children }) => {
    return (
        <AspectsContext.Provider value={aspectsCmi}>
            {children}
        </AspectsContext.Provider>
    )
}

// Hook personalizado para usar el contexto
export const useAspects = () => {
    return useContext(AspectsContext)
}
