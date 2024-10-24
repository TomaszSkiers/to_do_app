import React from 'react'
import s from './operations.module.scss'
import OperationInfo from '../OperationInfo/OperationInfo'

export default function Operations({operations, setTasks, taskId}) {
  return (
    <div className={s.container}>
      {operations.map((operation) =>(
        <OperationInfo 
        key={operation.id} 
        title={operation.operation_description}
        operationId={operation.id}
        spentTime={operation.spent_time}
        setTasks={setTasks}
        taskId={taskId}
        />
      ))}
    </div>
  )
}
// tutaj wyświetlam operację, dane biorę ze stanu 