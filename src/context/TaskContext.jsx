import React from 'react'

import { createContext,useState,useEffect } from 'react'
import { Task as data } from '../data/Task';

export const TaskContext = createContext()

export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([]);

    function createTask(task) {
            setTasks([...tasks, {
            title: task.title,
            id: tasks.length,
            description: task.description
            }])
        }
    function deleteTask(taskId) {
            setTasks(tasks.filter(task => task.id !== taskId))
        }

    useEffect(() => {
            setTasks(data);
        }, []);
            
    return (
        <TaskContext.Provider value= {{
            tasks:tasks,
            createTask:createTask,
            deleteTask:deleteTask
        }}> 
        {props.children}
        </TaskContext.Provider>
    )
}

export default TaskContextProvider