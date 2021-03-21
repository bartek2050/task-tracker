import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from "react";
import AddTask from "./components/AddTask";

function App() {
    const [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: "Doktor X",
            day: "Feb 5th at 2:30 pm",
            reminder: true,
        },
        {
            id: 2,
            text: "Zakupy",
            day: "Feb 6th at 1:30 pm",
            reminder: true,
        },
        {
            id: 3,
            text: "Samochód serwis",
            day: "Feb 7th at 6:35 pm",
            reminder: false,
        }
    ])
    //AddTask
    const addTask = (task) => {
        const id = Math.floor(Math.random() * 10000) + 1;
        const newTask = {id, ...task}
        setTasks([...tasks, newTask])
    }

    //Delete tasks
    const deleteTask = (id) => {
        setTasks(tasks.filter((item) => item.id !== id));
    }
    //Toggle reminder
    const toggleReminder = (id) => {
        setTasks(tasks.map((item) => item.id === id ? {...item, reminder: !item.reminder} : item))
    }


    return (
        <div className="container">
            <Header title="Task tracker" setButton={() => setShowAddTask(!showAddTask)}
            showAdd={showAddTask}/>
            {showAddTask && <AddTask onAdd={addTask}/>}
            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}
                                       onToogle={toggleReminder}/> : "No tasks"}
        </div>
    );
}

export default App;
