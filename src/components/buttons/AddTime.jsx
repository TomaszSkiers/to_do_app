import React from 'react'
import s from './addTime.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

export default function AddTime({setShowTracker}) {
  return (
    <div>
      <button className={s.add_time_button} onClick={()=>{setShowTracker(false)}}>
        <FontAwesomeIcon icon={faClock} />
        </button>
    </div>
  )
}
