import React from 'react'
import s from './addButton.module.scss'

export default function AddButton({handleClick, height = '40px', border}) {
  return (
    <button 
        style={{
          height: height,
          borderLeft: border ? 'none' : null,
          borderRadius: border ? '0 5px 5px 0' : null,
        }}
        className={s.add_button}
        onClick={handleClick}
        >Add</button>
  )
}
