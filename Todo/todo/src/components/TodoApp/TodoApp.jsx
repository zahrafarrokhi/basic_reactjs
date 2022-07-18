import "./TodoApp.css"
import AddTaskForm from "../AddTaskForm/AddTaskForm";
import TaskList from "../TaskList/TaskList";
import FilterFooter from "../FilterFooter/FilterFooter";

const TodoApp = () => {
  return ( 
    <div className="TodoApp">      
      <AddTaskForm />
      <TaskList />
      <FilterFooter/>
    </div>
   );
}
 
export default TodoApp;