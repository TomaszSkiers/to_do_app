import React, { useState } from "react"
import s from "./addOperation.module.scss"
import addOperationToTask from "../../API/addOperationToTask"
import getOperationsByTaskId from "../../API/getOperationsByTaskId"
import AddButton from "../buttons/AddButton"


export default function AddOperation({ taskId, setTasks }) {
  const [operationText, setOperationText] = useState("")

  const handleAddOperation = async (taskId, operationText) => {
    if (operationText.trim() === "") {
      alert("nic nie wpisano")
      return
    }

    const ifAdded = await addOperationToTask(taskId, operationText)
    if (ifAdded) {
      const ifData = await getOperationsByTaskId(taskId)
      if (ifData) {
        console.log(ifData)

        // Aktualizacja stanu
        setTasks((tasks) =>
          tasks.map((task) =>
            task.id === taskId ? { ...task, operations: ifData } : task
          )
        )
      }
    }
  }

  return (
    <div className={s.container}>
      <input
        type="text"
        placeholder="Add operation description"
        value={operationText}
        onChange={(e) => {
          setOperationText(e.target.value)
        }}
      />
      {/* <button
        onClick={() => {
          handleAddOperation(taskId, operationText)
        }}
      >
        Add
      </button> */}
      <AddButton
        height={'30px'}
        border={true}
        handleClick={() => {
          handleAddOperation(taskId, operationText)
        }}
      />
    </div>
  )
}
