import {useState} from 'react'
import React from 'react'
import Task from './Task'

type TaskData = {
  id: number;
  name: string;
}

const TodoList = () => {

  const [curTask, setCurTask] = useState<string>('')
  const [tasks, setTasks] = useState<TaskData[]>([])

  const onChangeCallback = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setCurTask(ev.target.value)
  }

  const addTask = (taskName: string) => {
    //use date.getTime() to get unique numeric id (https://www.w3schools.com/jsref/jsref_gettime.asp)
    const newId = (new Date()).getTime()

    // create new task list (หากจะ set ค่าให้กับตัวแปรที่สร้างจาก useState จะต้องสร้างข้อมูลใหม่หมดเสมอ)
    // spread syntax [...array] (https://www.freecodecamp.org/news/array-destructuring-in-es6-30e398f21d10/)
    const newTasks = [...tasks, {id: newId, name: taskName}]

    setTasks(newTasks)
  }

  const deleteTask = (id: number) => {
    // create new task list (หากจะ set ค่าให้กับตัวแปรที่สร้างจาก useState จะต้องสร้างข้อมูลใหม่หมดเสมอ)
    const newTasks = tasks.filter(x => x.id !== id)
    setTasks(newTasks)
  }

  return (
    <div style={{backgroundColor: 'yellow'}}>
      <h3> React todo list</h3> 
      <input onChange={onChangeCallback}></input>
      <button onClick={() => addTask(curTask)}>Add Task</button>
      {tasks.map( x => <Task id={x.id} name={x.name} deleteFn={deleteTask}/>)}
    </div>
  )
}

export default TodoList