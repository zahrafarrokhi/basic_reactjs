import TaskItem from '../TaskItem/TaskItem'
import "./TaskList.css";

const TaskList = (props) => {
  const { tasklist } = props;

  return (
    <div className="TaskList">
      <ul>
        {/* <TaskItem/> */}
        {/*  */}
        {tasklist.map((task) => {
          return (<TaskItem taskitem={task} />)
        })}
      </ul>
    </div>
  );
};

export default TaskList;
