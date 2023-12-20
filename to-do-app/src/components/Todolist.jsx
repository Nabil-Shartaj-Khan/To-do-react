import { useState } from "react";
import "../css/style.css"

const Todolist = () => {

        const [tasks,setTasks]=useState([]); //about task list 
        const [newTask,setNewtask]=useState("") //about the task input


        const handleInputChange=(e)=>{

            setNewtask(e.target.value)

        }

        const addTask=()=>{

            if(newTask.trim()!==""){
                setTasks(t=>[...t,newTask])
                setNewtask("")

            }
            
        }
        const deleteTask=(i)=>{

            const updatedTasks=tasks.filter((_,index)=>index!==i);
            setTasks(updatedTasks);


        }
        const moveTaskup = (index) => {
            if (index > 0) {
                const updatedTasks = [...tasks];
                [updatedTasks[index], updatedTasks[index - 1]] =
                    [updatedTasks[index - 1], updatedTasks[index]];
                setTasks(updatedTasks);
            }
        }
        const moveTaskDown=(index)=>{

            if(index < tasks.length - 1){
                const updatedTasks = [...tasks];
                [updatedTasks[index], updatedTasks[index + 1]] = 
                [updatedTasks[index + 1], updatedTasks[index]];
                setTasks(updatedTasks);
            }
        }







    
    return (

        <div className="to-do-list">
            <h1 className="text-center text-success display-3">To do app</h1>
            <hr></hr>
            <label className="label me-4">Task input-</label>
            <input type="text" placeholder="Input your task..." value={newTask} onChange={handleInputChange} className="p-3 pt-4 me-3 mb-4"/>
            <button className="btn btn-success p-3 mt-0 mb-2" onClick={addTask}>Add (+)</button>
            <ol9uoli8>
                                {tasks.map((e, i) => (
                        <li key={i}>
                            <span>{e}</span>
                            <button className="btn btn-danger ms-4 px-4 py-2 me-3" onClick={()=>deleteTask(i)}> Delete </button>
                            <button className="btn btn-primary px-4 py-2 me-3" onClick={()=>moveTaskup(i)}> Move up </button>
                            <button className="btn btn-primary px-4 py-2 me-3" onClick={()=>moveTaskDown(i)}> Move Down </button>
                        </li>
                    ))}

            </ol9uoli8>
        </div>

      );
}
 
export default Todolist;