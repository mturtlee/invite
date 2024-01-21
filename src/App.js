import { useState } from "react";
import Header from "./component/Header";
import Tasks from "./component/Tasks";
import AddTask from "./component/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doc1",
      day: "feb 11",
      reminder: false,
    },
    {
      id: 2,
      text: "Doc2",
      day: "Mart 1",
      reminder: false,
    },
    {
      id: 3,
      text: "Doc3",
      day: "Jan 31",
      reminder: false,
    },
  ]);

  //Add Event

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  //Delete Task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No events to show"
      )}
    </div>
  );
}

export default App;
