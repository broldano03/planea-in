import React, { createContext, useContext, useState } from 'react'

const ItemsContext = createContext()

export const ItemsProvider = ({ children }) => {

    // data's in the backend
    const [aspectsCmi, setAspectsCmi] = useState([])

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
                aspectsCmi, setAspectsCmi: (_aspectsCmi) => {
                  setAspectsCmi(_aspectsCmi);
                  const newKeyResults = _aspectsCmi?.flatMap(aspect =>
                      aspect.objectives?.flatMap(objective => objective.keyResults || [])
                  ) || [];
                  const newProjects = newKeyResults?.flatMap(kr => kr.projects || []) || [];
                  const newActions = newProjects?.flatMap(project => project.actions || []) || [];
                  const newTasks = newActions?.flatMap(action => action.tasks || []) || [];
                  setKeyResults(newKeyResults);
                  setProjects(newProjects);
                  setActions(newActions);
                  setTasks(newTasks);
                },
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
