import React from "react"
import s from "./tasks.module.scss"
import Task from "../task/Task"

export default function Tasks({ tasks, setTasks }) {
  if (!tasks) return <h3>Loading data ....</h3>
  return (
    <div className={s.container}>
      {tasks.map((task) => (
        <Task key={task.id} task={task} setTasks={setTasks} />
      ))}
    </div>
  )
}
