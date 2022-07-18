### Todo

#### install

```jsx
npx create-react-app todo
cd todo
npm start
```

### rest css

[rest css](https://meyerweb.com/eric/tools/css/reset/)

```jsx
// index.css;
*{
box-sizing: border-box;
}
```

### Google Fonts: Browse Fonts

(google fonts)[https://fonts.google.com]

```jsx
// index.html
<!-- fonts recursive -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Recursive:wght@300;500;700&display=swap"
      rel="stylesheet"
    />
// index.css
body {

  font-family: 'Recursive', sans-serif;
}
```

#### CSS antialiasing cheatsheet

[font smoothing](https://devhints.io/css-antialias)

```jsx
//index.css
*{

-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}
```

#### background-color

#### flat colors

[flat colors](https://flatuicolors.com/palette/defo)

```jsx
body {

  background-color: #ecf0f1;
}
```

### css

```jsx
//TodoApp.css
//Header.css
//index.css
body{
  font-weight:500
}
h1{
	font-size: 30px;
	font-weight: 300;
}
//Footer.css
//AddTaskForm.css

//TaskList.css
//TaskItem.css

//FilterFooter
```

#### react-icons

(react-icons)[https://react-icons.github.io/react-icons/]

```jsx
npm install react-icons --save
//TaskItem.jsx
import { FaTrashAlt } from "react-icons/fa";
```

#### (Bem styling)

(Bem styling)[http://getbem.com/introduction/]

```jsx
//
//FilterFooter--filters
```

### actios

```jsx
npm install uuid
import { v4 as uuidv4 } from 'uuid';
```

`TodoApp.jsx`

```jsx
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
  })

 <TaskList tasklist={tasks} />
```

`TaskList.jsx`

```jsx
const { tasklist } = props;
{
  tasklist.map((task) => {
    return <TaskItem taskitem={task} />;
  });
}
```

`TaskItem.jsx`

```jsx
const {taskitem} = props;
<input type="checkbox" checked={taskitem.status} />
<h2>{taskitem.title}</h2>
```

###### state AddTaskForm

`AddTaskForm.jsx`

```jsx
//AddTaskForm.jsx
const [value, setValue] = useState("");

const changeInput = (event) => {
  if (event) event.preventDefault();
  setValue(event.target.value);
};
//
<input
  onChange={changeInput}
  type="text"
  placeholder="what needs to be done?"
/>;
//AddTaskForm.jsx
const Submit = () => {};
<form className="todo" onSubmit={Submit}>
  . .
</form>;
```

#### ADD TASK

```jsx
//TodoApp.jsx
const addTask = (taskTitle) => {
  setTasks([
    ...tasks,
    {
      id: uuidv4(),
      title: taskTitle,
      status: false,
    },
  ]);
};
<AddTaskForm addTask={addTask} />;
//AddTaskForm.jsx
const { addTask } = props;
const Submit = () => {
  addTask(value);
};
// !value && value == ""
const Submit = () => {
  if (!value || value === "") {
    return;
  }
  addTask(value);
};
//dont refresh page
const Submit = (event) => {
  if (event) event.preventDefault();
  if (!value && value == "") {
    return;
  }
  addTask(value);
};
```

### DELETE TASK

###### example

```jsx
console.log()
const tasks = [ {
      id:1,
      title: "default title",
      status:true
      },
    {
        id:2,
        title: "default title 2",
        status:false
      },]
//
tasks.findIndex((task) => task.id === 2)
//out=>1
//
let newTaskList = tasks
//
newTaskList
//out=>(2) [{…}, {…}]
//delete
delete newTaskList[1];
//out=> true
//
newTaskList
out=>(2) [{…}, empty]
//delete empty from array
newTaskList.filter(item=>item)
//out=>[{…}]
// 0: {id: 1, title: 'default title', status: true}
// length: 1
// [[Prototype]]: Array(0)


```

##### deleteTask

```jsx
//TodoApp.jsx
//deleteTask
const deleteTask = (taskId) => {
  let newTaskList = tasks;
  delete newTaskList[tasks.findIndex((task) => task.id === taskId)];
  newTaskList.filter((item) => item);
  setTasks(newTaskList);
};
<TaskList tasklist={tasks} deleteTask={deleteTask} />;
//TaskList
{
  tasklist.map((task) => {
    return <TaskItem taskitem={task} deleteTask={deleteTask} />;
  });
}
//TaskItem.jsx
const { taskitem, deleteTask } = props;
<button
  onClick={() => {
    deleteTask(taskitem.id);
  }}
>
  <FaTrashAlt />
</button>;
```

#### fix delete

### filter points

```jsx
//filter point
let arr = [1, 2, 3];
delete arr[arr.findIndex((x) => x == 2)];
arr;
//out=>[1,empty,3]
arr.filter((item) => item);
//out=>[1,3]
arr;
//out=>[1,empty,3]
(so) => (arr = arr.filter((item) => item));
```

```jsx
//
let newTaskList = [...tasks];

//
const deleteTask = (taskId) => {
  let newTaskList = [...tasks];
  delete newTaskList[tasks.findIndex((task) => task.id === taskId)];
  newTaskList = newTaskList.filter((item) => item);
  setTasks(newTaskList);
};
```

#### count tasks

```jsx
//TodoApp.jsx
<FilterFooter tasks={tasks } />
//FilterFooter.jsx
 <div className="FilterFooter--countItems">{tasks.length }</div>
```

#### filters

```jsx
//FilterFooter.jsx
const [filter, setFilter] = useState("all");
const handleFilter = (filterName) => {
  setFilter(filterName);
};
<button
  onClick={() => handleFilter("all")}
  className={filter === "all" ? "active" : ""}
>
  All
</button>;
//TodoApp.jsx
//state
const [filter, setFilter] = useState("");

const [filteredTasks, setFilteredTasks] = useState([]);

useEffect(() => {
  // console.log("filter", filter)
  if (filter === "all") {
    setFilteredTasks(tasks);
  }

  if (filter === "completed") {
    const comp = tasks.filter((task) => task.status);
    setFilteredTasks(comp);
  }
  if (filter === "active") {
    const comp = tasks.filter((task) => !task.status);
    setFilteredTasks(comp);
  }
}, [filter, tasks]);
//tasklist={filteredTasks}
 <TaskList tasklist={filteredTasks} deleteTask={deleteTask } />
// item length => tasks={filteredTasks }
<FilterFooter updateFilter={setFilter } tasks={filteredTasks } />

```
