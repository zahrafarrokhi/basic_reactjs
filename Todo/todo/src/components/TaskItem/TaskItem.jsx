import "./TaskItem.css";
import { FaTrashAlt } from "react-icons/fa";

const TaskItem = (props) => {
  const { taskitem } = props;
  return (
    <div>
      <li className="TaskItem ">
        <input type="checkbox" checked={taskitem.status} />
        <h2>{taskitem.title}</h2>
        <button>
          <FaTrashAlt />
        </button>
      </li>
    </div>
  );
};

export default TaskItem;
