import React,{useState} from 'react';
import "./AddTaskForm.css";

const AddTaskForm = (props) => {
  const { addTask } = props;
  const [value, setValue] = useState('');
 // changeInput
  const changeInput = (event) => {
    if (event) event.preventDefault();
    setValue(event.target.value);
    
  }
  console.log("value", value);
  //Submit
  const submit = (event) => {
    if (event) event.preventDefault();
    if (!value || value === "") {
      return
    };
    addTask(value);
  };
  return (
    <div className="AddTaskForm">
      <form className="todo" onSubmit={submit}>
        <input onChange={changeInput} type="text" placeholder="what needs to be done?" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTaskForm;
