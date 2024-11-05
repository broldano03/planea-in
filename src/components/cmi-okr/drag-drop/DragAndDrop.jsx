import { faPlusCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import './Drag.css'

const DragAndDrop = ({items, setItems}) => {
    
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: 'Tarea 1',
            body: 'tarea 1 1111 1111 11111 1111 1111 1111 1111',
            list: 1
        },
        {
            id: 2,
            title: 'Tarea 2',
            body: 'tarea 2 22222 2222 222 22 222 2222 2222 222',
            list: 1
        },
        {
            id: 3,
            title: 'Tarea 3',
            body: 'tarea 3 333 3 333 3333 3333 3333 333 33333',
            list: 1
        },
        {
            id: 4,
            title: 'Tarea 4',
            body: 'tarea 4 4444 44 444 44444 4444 44444 4444 4',
            list: 1
        }
    ])

    const getList = (list) => {
        return tasks.filter (item => item.list === list)
    }

    const starDrag = (e, item) => {
        e.dataTransfer.setData('itemID', item.id)
        console.log(item)
        
    }

    return (
        <>
        <h1 className="text-center font-bold uppercase text-white">Prueba de Kanban</h1>
        <br/>

        <div className="px-5 py-3 border-2 rounded-md bg-slate-500">
            <div>
                <h3 className="px-5 text-center font-bold uppercase text-white">Tareas por hacer</h3>
            </div>
            <div > {/** Zona de items */}
                {getList(1).map(item => (
                    /** Cada item */
                    <div key={item.id}
                    draggable 
                    onDragStart={(e)=> starDrag(e, item)}
                    className="px-5 py-3 bg-slate-800 rounded-md my-2 cursor-pointer"> 
                        <strong className="font-bold text-white uppercase">{item.title} </strong>
                        <p className="text-white" >{item.body}</p>
                        <FontAwesomeIcon icon={faPlusCircle} 
                        className="text-white hover:scale-125 "
                        />
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default DragAndDrop
