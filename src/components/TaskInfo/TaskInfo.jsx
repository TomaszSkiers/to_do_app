import React from "react"
import s from "./taskInfo.module.scss"
import deleteTask from "../../API/deleteTask"
import AddButton from "../buttons/AddButton"
import FinishButton from "../buttons/FinishButton"

export default function TaskInfo({ taskId, title, desc, show, setTasks }) {
  const handleDeleteTask = async (taskId) => {
    //dobrze by było dodać ostrzeżenie przed usunięciem
    const isConfirmed = window.confirm("are you sure?")
    if (isConfirmed) {
      //usuwam rekord z bazy danych
      const ifDeleted = await deleteTask(taskId)

      //teraz odświeżenie widoku aktualizacje state
      if (ifDeleted) {
        setTasks((prev) => {
          return prev.filter((task) => task.id !== taskId)
        })
      }
    } else {
      console.log("anulowano usunięcie taska")
    }
  }

  return (
    <div className={s.container}>
      <div className={s.title_wrapper}>
        <h1>{title}</h1>
        <h2>{desc}</h2>
      </div>
      <div className={s.button_wrapper}>
        {/* <button onClick={show}>Add</button> */}
        <AddButton handleClick={show}/>
        {/* <button>Finish</button> */}
        {/* <button
          onClick={() => {
            handleDeleteTask(taskId)
          }}
        >
          Finish
        </button> */}
        <FinishButton handleClick={() => {handleDeleteTask(taskId)}}/>
      </div>
    </div>
  )
}
