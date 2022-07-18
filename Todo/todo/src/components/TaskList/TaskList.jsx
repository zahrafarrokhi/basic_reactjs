import TaskItem from '../TaskItem/TaskItem'
import "./TaskList.css";

const TaskList = () => {
  return (
    <div className="TaskList">
      <ul>
      <TaskItem/>
      </ul>
    </div>
  );
};

export default TaskList;
