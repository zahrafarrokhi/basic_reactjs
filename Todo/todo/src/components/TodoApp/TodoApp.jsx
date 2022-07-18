import React,{useState} from 'react';
import "./TodoApp.css"
import AddTaskForm from "../AddTaskForm/AddTaskForm";
import TaskList from "../TaskList/TaskList";
import FilterFooter from "../FilterFooter/FilterFooter";
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  //filter
  const [filter, setFilter] = useState('');
  //
  const [filteredTasks, setFilteredTasks] = useState([]);
  
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
  }, [])
  //filter
  useEffect(() => {
    // console.log("filter", filter)
    if (filter === "all") {
      setFilteredTasks(tasks);
    }
    
    if (filter === "completed") {
      const comp = tasks.filter(task => task.status)
      setFilteredTasks(comp);
    }
    if (filter === "active") {
      const comp = tasks.filter(task => !task.status)
      setFilteredTasks(comp);
    }
  }, [filter,tasks])
  //addTask
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
  //deleteTask
  const deleteTask = (taskId) => {
    let newTaskList = [...tasks]
    delete newTaskList[tasks.findIndex((task) => task.id === taskId)]; 
    newTaskList = newTaskList.filter((item) => item);
    setTasks(newTaskList);
  }
  return ( 
    <div className="TodoApp">      
      <AddTaskForm  addTask={addTask}/>
      <TaskList tasklist={filteredTasks} deleteTask={deleteTask } />
      <FilterFooter updateFilter={setFilter } tasks={filteredTasks } />
    </div>
   );
}
 
export default TodoApp;