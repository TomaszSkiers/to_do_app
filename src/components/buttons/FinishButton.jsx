import React from 'react'
import s from './finishButton.module.scss'
export default function FinishButton({handleClick}) {
  return (
    <button
        className={s.finish_button}
        onClick={handleClick}
    
    >Finish</button>
  )
}
