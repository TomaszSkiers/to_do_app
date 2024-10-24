import React, { useState } from "react"
import s from "./addTask.module.scss"
import insertTask from "../../API/insertTsak"
import fetchLastTask from "../../API/fetchLastTask"

export default function AddTask({ setTasks }) {
  //w propsach odbieram funkcję do manipulacji na taskach
  const [text, setText] = useState({
    title: "",
    desc: ""
  })

  const refreshStateText = (e) => {
    const { name, value } = e.target
    setText((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const addTaskToDatabase = async () => {
    if (text.title.trim() === "" || text.desc.trim() === "") {
      console.log(`put information about task`)
      alert('put some information about task and his description')
      return
    }
    const ifRecordAdded = await insertTask(text.title, text.desc)
    if (ifRecordAdded) {
      //insertTask zwraca true jak nie wystąpiły żadne błędy przy dodaniu rekordu
      // console.log(ifRecordAdded)
      //i teraz pobieram ostatni rekord z bazy danych
      const lastTask = await fetchLastTask()
      if (lastTask.length !== 0) {
        //dodaj do stanu żeby wyświetlić
        console.log('jakies dane przyleciały')
        console.log('dane z bazy', lastTask)
        setTasks(prev => [...prev, lastTask])
      }
    } else {
      console.log("object")
      //a tu trzeba obsłużyć sytuację gdy rekord nie
      //został dodany
    }
  }

  return (
    <div className={s.container}>
      <div className={s.inputs_wrapper}>
        <input
          className={s.input}
          placeholder="Title"
          name="title"
          value={text.title}
          onChange={refreshStateText}
        ></input>
        <input
          className={s.input}
          placeholder="Description"
          name="desc"
          value={text.desc}
          onChange={refreshStateText}
        ></input>
      </div>
      <button onClick={addTaskToDatabase}>Add task</button>
    </div>
  )
}
