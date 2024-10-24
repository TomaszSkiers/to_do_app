import React, { useState } from "react"
import s from "./timeTracker.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes, faSave } from "@fortawesome/free-solid-svg-icons"
import addSpentTime from "../../API/addSpentTime"

export default function TimeTracker({ setShowTracker, operationId, setTasks, taskId }) {
  const [inputValue, setInputValue] = useState(0)

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const saveTime = async (operationId, time, taskId) => {
    const ifAdded = await addSpentTime(operationId, time)
    if (ifAdded) {
      // Aktualizacja stanu
      setTasks((tasks) => {
        return tasks.map((task) => {
          if (task.id === taskId) {
            return {
              ...task,
              operations: task.operations.map((operation) => {
                if (operation.id === operationId) {
                  return { ...operation, spent_time: time } // Zaktualizowanie czasu operacji
                }
                return operation
              })
            }
          }
          return task
        })
      })
    } else {
      // Obsługa błędu
      console.log("Błąd przy dodawaniu czasu")
    }
    setShowTracker(true)
  }

  return (
    <div className={s.container}>
      <input
        type="number"
        value={inputValue}
        onChange={handleChange}
        min={0}
      />
      <button 
        onClick={() => saveTime(operationId, inputValue, taskId)}
        className={s.button_save}
      >
        <FontAwesomeIcon icon={faSave} />
      </button>
      <button
        className={s.button_cancel}
        onClick={() => setShowTracker(true)}
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </div>
  )
}
