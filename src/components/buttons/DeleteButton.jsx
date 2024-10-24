import React from 'react'
import s from './deleteButton.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function DeleteButton({handleClick}) {
  return (
    <button className={s.delete_button} onClick={handleClick}><FontAwesomeIcon icon={faTrash}/></button>
  )
}
