import "./TaskItem.css";
import { FaTrashAlt } from "react-icons/fa";

const TaskItem = () => {
  return (
    <div>
      <li className="TaskItem ">
        <input type="checkbox" />
        <h2>Build This App</h2>
        <button>
          <FaTrashAlt />
        </button>
      </li>
    </div>
  );
};

export default TaskItem;
