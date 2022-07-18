import "./AddTaskForm.css";
const AddTaskForm = () => {
  return (
    <div className="AddTaskForm">
      <form className="todo">
        <input type="text" placeholder="what needs to be done?" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTaskForm;
