import React, { useState } from "react"
import s from "./operationInfo.module.scss"
import deleteOperationById from "../../API/deleteOperationById"
import getOperationsByTaskId from "../../API/getOperationsByTaskId"
import DeleteButton from "../buttons/DeleteButton"
import AddTime from "../buttons/AddTime"
import TimeTracker from "../TimeTracker/TimeTracker"

export default function OperationInfo({
  operationId,
  title,
  spentTime,
  setTasks,
  taskId
}) {
  //variables
  const [showTracker, setShowTracker] = useState(true)

  //functions
  const handleDeleteOperation = async (operationId) => {
    const ifAccepted = window.confirm("are you sure?")
    if (ifAccepted) {
      const ifOperationDeleted = await deleteOperationById(operationId)
      if (ifOperationDeleted) {
        console.log(ifOperationDeleted)

        const operations = await getOperationsByTaskId(taskId)

        setTasks((tasks) =>
          tasks.map((task) =>
            task.id === taskId ? { ...task, operations: operations } : task
          )
        )
      } else {
        console.log("coś nie tak z usuwaniem rekordu")
      }
    }
  }

  function convertMinutesToHoursAndMinutes(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60).toString().padStart(2, "0"); // Zera wiodące dla godzin
    const minutes = (totalMinutes % 60).toString().padStart(2, "0"); // Zera wiodące dla minut
    
    return `${hours}h ${minutes}m`; // Zwraca czas w formacie "hh:mm"
  }
  

  return (
    <div className={s.container}>
      <h3>{title}</h3>
      <div className={s.buttons_wrapper}>
        {spentTime > 0 ?  <span className={s.display_time}>{convertMinutesToHoursAndMinutes(spentTime)}</span> : null}
        {showTracker ? <AddTime setShowTracker={setShowTracker}/> : <TimeTracker operationId={operationId} setShowTracker={setShowTracker} setTasks={setTasks} taskId={taskId}/>}
        {showTracker ? <DeleteButton handleClick={() => handleDeleteOperation(operationId)} /> : null}
        
      </div>
    </div>
  )
}
