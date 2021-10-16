import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import About from './components/About'
import { useState } from 'react'

function App() {

  //Make the button toggle the form
  const [showAddTask, setShowAddTask] = useState(false);

  //Different tasks as an array of objects whose props can be accessed
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at school',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Food shopping',
      day: 'Feb 6th at 2:30pm',
      reminder: false,
    },
  ]);

  //Add a task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000 + 1)

    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }


  // Delete Task in UI
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  //Return JSX container encapsulating everything in the UI, which is stipulated by means of components
  return (
    <Router>
      <div className="container">

        <Header onAdd={() => setShowAddTask(!showAddTask)}
          showAddTask={showAddTask}
        />

        

        <Route path='/' exact render={(props) => (
          <>
            {showAddTask && <AddTask onAdd={addTask} />}

            {tasks.length > 0 ? <Tasks
              tasks={tasks}
              onDelete={deleteTask}
              onToggle={toggleReminder}
            /> : ('No Tasks')}
          </>
        )} />

        <Route path='/about' component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
