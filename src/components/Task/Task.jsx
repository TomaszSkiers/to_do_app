import React, { useState } from "react"
import s from "./task.module.scss"
import TaskInfo from "../TaskInfo/TaskInfo"
import AddOperation from "../AddOperation/AddOperation"
import Operations from "../Operations/Operations"

export default function Task({ task, setTasks }) {
  const [show, setShow] = useState(false)

  const showAddOperation = () => {
    setShow(!show)
  }

  return (
    <div className={s.container}>
      <TaskInfo
        taskId={task.id}
        title={task.title}
        desc={task.description}
        show={showAddOperation}
        setTasks={setTasks}
      />
      {show ? <AddOperation taskId={task.id} setTasks={setTasks} /> : null}
      {/**tu musi być warunkowe generowanie elementu
       * bo wywala map w tasks, nie widzi tabeli operations
       */}
      {Array.isArray(task.operations) && task.operations.length > 0 ? (
        <Operations 
          operations={task.operations}
          setTasks={setTasks}
          taskId={task.id}
        />
      ) : null}
    </div>
  )
}
