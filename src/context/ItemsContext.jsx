import React, { createContext, useContext, useState } from 'react'

const ItemsContext = createContext()

export const ItemsProvider = ({ children }) => {

    const [aspectsCmi, setAspectsCmi] = useState([
        {
            id:1,
            cod: "Financiero",
            title: "Financiero",
            color: "bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600",
            bgOkr: "light-blue",
            objectives: [
                {
                    description: "Aumentar la rentabilidad de la empresa",
                    id: 1234,
                    startDate: "",
                    endDate: "",
                    manager:"",
                    keyResults: [
                        {
                            description: "Incrementar el margen bruto del 45% al 55% al optimizar los costos de producción.",
                            id: 4277,
                            statusKanban: "Hecho",
                            importance: false,
                            urgency: true,
                            startDate: "",
                            endDate: "",
                            manager:"",
                            projects: [
                                {
                                    description: "Análisis con herramientas Lean",
                                    id: 5968224,
                                    statusKanban: "En-Proceso",
                                    importance: true,
                                    urgency: true,
                                    startDate: "",
                                    endDate: "",
                                    manager:"",
                                    actions: [
                                        {
                                            description: "Realizar mapa de valor",
                                            id: 99785968224,
                                            statusKanban: "Pendiente",
                                            importance: true,
                                            urgency: true,
                                            startDate: "",
                                            endDate: "",
                                            manager:"",
                                            tasks: [
                                                {
                                                    description: "Observar procesos",
                                                    id: 59417568224,
                                                    statusKanban: "En-Proceso",
                                                    importance: true,
                                                    urgency: true,
                                                    startDate: "",
                                                    endDate: "",
                                                    manager:"",
                                                },
                                                {
                                                    description: "Entrevistar operarios",
                                                    id: 59417744823,
                                                    statusKanban: "Pendiente",
                                                    importance: true,
                                                    urgency: true,
                                                    startDate: "",
                                                    endDate: "",
                                                    manager:"",
                                                },
                                            ]
                                        },
                                        {
                                            description: "Obtener información de procesos",
                                            id: 5912368224,
                                            statusKanban: "En-Proceso",
                                            importance: true,
                                            urgency: true,
                                            startDate: "",
                                            endDate: "",
                                            manager:"",
                                            tasks: [],
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            description: "Reducir los gastos operativos en un 10% mediante la implementación de procesos de eficiencia en el próximo trimestre.",
                            id: 4278,
                            statusKanban: "Pendiente",
                            importance: true,
                            urgency: true,
                            startDate: "",
                            endDate: "",
                            manager:"",
                            projects: [
                                {
                                    description: "Análisis de procesos operativos",
                                    id: 596888812,
                                    statusKanban: "Pendiente",
                                    importance: false,
                                    urgency: false,
                                    startDate: "",
                                    endDate: "",
                                    manager:"",
                                    actions: [
                                        {
                                            description: "Elaboración de MAPRO",
                                            id: 9999812,
                                            statusKanban: "Hecho",
                                            importance: true,
                                            urgency: false,
                                            startDate: "",
                                            endDate: "",
                                            manager:"",
                                            tasks: [
                                                {
                                                    description: "Observación de Macroprocesos",
                                                    id: 95511412,
                                                    statusKanban: "Hecho",
                                                    importance: true,
                                                    urgency: false,
                                                    startDate: "",
                                                    endDate: "",
                                                    manager:"",
                                                },
                                                {
                                                    description: "Elaboración de BPMN",
                                                    id: 991435244,
                                                    statusKanban: "En-Proceso",
                                                    importance: false,
                                                    urgency: true,
                                                    startDate: "",
                                                    endDate: "",
                                                    manager:"",
                                                },
                                                {
                                                    description: "Estudio de tiempos",
                                                    id: 991438888,
                                                    statusKanban: "Pendiente",
                                                    importance: false,
                                                    urgency: false,
                                                    startDate: "",
                                                    endDate: "",
                                                    manager:"",
                                                }
                                            ]
                                        },
                                        {
                                            description: "Ficha de procesos",
                                            id: 9999812,
                                            statusKanban: "Pendiente",
                                            importance: false,
                                            urgency: true,
                                            startDate: "",
                                            endDate: "",
                                            manager:"",
                                            tasks: []
                                        }
                                    ]
                                }
                            ]
                        },
                    ]
                }
            ]
        },


        {
            id:2,
            cod: "ClientesMercado",
            title: "Clientes y Mercado",
            color: "bg-gradient-to-br from-fuchsia-900 via-fuchsia-850 to-fuchsia-600",
            bgOkr: "light-purple",
            objectives: [
                {
                    description: "Mejorar la satisfacción del cliente",
                    id: 456,
                    startDate: "",
                    endDate: "",
                    manager:"",
                    keyResults: [
                        {
                            description: "Incrementar la puntuación de satisfacción del cliente (NPS) de 65 a 80 para el final del trimestre.",
                            id: 9378,
                            statusKanban: "Pendiente",
                            importance: true,
                            urgency: true,
                            startDate: "",
                            endDate: "",
                            manager:"",
                            projects: [
                                {
                                    description: "Desarrollar método de encuestas",
                                    id: 596412412,
                                    statusKanban: "Hecho",
                                    importance: true,
                                    urgency: false,
                                    startDate: "",
                                    endDate: "",
                                    manager:"",
                                    actions: []
                                },
                                {
                                    description: "Análisis de Encuestas",
                                    id: 159159412,
                                    statusKanban: "En-Proceso",
                                    importance: false,
                                    urgency: true,
                                    startDate: "",
                                    endDate: "",
                                    manager:"",
                                    actions: []
                                },
                            ]
                        },
                        {
                            description: "Reducir el tiempo promedio de resolución de tickets de soporte de 48 horas a 24 horas.",
                            id: 9379,
                            statusKanban: "En-Proceso",
                            importance: true,
                            urgency: false,
                            startDate: "",
                            endDate: "",
                            manager:"",
                            projects: []
                        },
                    ]
                }
            ]  
        },


        {
            id:3,
            cod: "ProcesosInternos",
            title: "Procesos Internos",
            color: "bg-gradient-to-br from-teal-800 via-teal-700 to-teal-600",
            bgOkr: "light-green",
            objectives: []  
        },


        {
            id:4,
            cod: "AprendizajesCrecimiento",
            title: "Aprendizajes y Crecimiento",
            color: "bg-gradient-to-br from-sky-950 via-sky-900 to-sky-700",
            bgOkr: "light-brown",
            objectives: [
                {
                    description: "Fomentar el desarrollo de habilidades del equipo",
                    id: 789,
                    startDate: "",
                    endDate: "",
                    manager:"",
                    keyResults: [
                        {
                            description: "Asegurar que el 90% del equipo complete al menos 20 horas de formación relevante para su rol en el trimestre.",
                            id: 752,
                            statusKanban: "En-Proceso",
                            importance: false,
                            urgency: true,
                            startDate: "",
                            endDate: "",
                            manager:"",
                            projects: []
                        },
                        {
                            description: "Implementar un programa de mentoría interna, asignando mentores a todos los empleados nuevos y alcanzando un 85% de participación.",
                            id: 753,
                            statusKanban: "Pendiente",
                            importance: false,
                            urgency: false,
                            startDate: "",
                            endDate: "",
                            manager:"",
                            projects: []
                        },
                    ]
                }
            ]  
        }
    ])

    const [keyResults, setKeyResults] = useState (aspectsCmi?.flatMap(aspect =>
        aspect.objectives?.flatMap(objective => objective.keyResults || [])
    ) || [])

    const [projects, setProjects] = useState (
        keyResults?.flatMap(kr => kr.projects || []) || []
    )

    const [actions, setActions] = useState (
        projects?.flatMap(project => project.actions || []) || []
    )

    const [tasks, setTasks] = useState (
        actions?.flatMap(action => action.tasks || []) || []
    )

    return (
        <ItemsContext.Provider
            value={{
                aspectsCmi, setAspectsCmi,
                keyResults, setKeyResults,
                projects, setProjects,
                actions, setActions,
                tasks, setTasks
                }}
        >
            {children}
        </ItemsContext.Provider>
    )
}
    
    // Hook personalizado para acceder al contexto
    export const useItems = () => useContext(ItemsContext);
