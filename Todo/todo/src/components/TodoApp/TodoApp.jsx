import React,{useState} from 'react';
import "./TodoApp.css"
import AddTaskForm from "../AddTaskForm/AddTaskForm";
import TaskList from "../TaskList/TaskList";
import FilterFooter from "../FilterFooter/FilterFooter";
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks([
    {
      id:uuidv4(),
      title: "default title",
      status:true
      },
    {
        id:uuidv4(),
        title: "default title 2",
        status:false
      },
    ])
  },[])
  const addTask = (taskTitle) => {
    
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        title: taskTitle,
        status: false
      },
    ]);
    
  }
  return ( 
    <div className="TodoApp">      
      <AddTaskForm  addTask={addTask}/>
      <TaskList tasklist={tasks}  />
      <FilterFooter/>
    </div>
   );
}
 
export default TodoApp;