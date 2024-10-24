import React, { useEffect, useState } from "react"
import { createRoot } from "react-dom/client"
import s from "./components/Main/main.module.scss"
import AddTask from "./components/AddTask/AddTask"
import Tasks from "./components/Tasks/Tasks"
import fetchAllTasksWithOperations from "./API/fetchAllTasksWithOperations"

function Main() {
  const [tasks, setTasks] = useState(false)
  useEffect(()=> {'wizualizacja zmian ', tasks},[tasks])

  useEffect(() => {
    fetchAllTasksWithOperations().then((data) => {
      setTasks(data)
    })
  }, [])

  return (
    <div className={s.container}>
      <AddTask setTasks={setTasks} />
      <Tasks tasks={tasks} setTasks={setTasks} />
    </div>
  )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<Main />)
