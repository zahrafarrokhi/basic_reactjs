import "./App.css";
import Header from "./components/Header/Header";
import AddTaskForm from "./components/AddTaskForm/AddTaskForm";
import TaskList from "./components/TaskList/TaskList";
import FilterFooter from "./components/FilterFooter/FilterFooter";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div >
      <Header />
      <AddTaskForm />
      <TaskList />
      <FilterFooter />
      <Footer />
    </div>
  );
}

export default App;
