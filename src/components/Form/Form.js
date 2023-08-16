import React from 'react'
import { useState } from 'react'
import './Form.css'
const Form = (props) => {
   const [taskName, setTaskName]=useState('');
   const [taskDate, setTaskDate]=useState('');

   const nameHandler=(event)=>{
    setTaskName(event.target.value)
   }

   const dateHandler=(event)=>{
    setTaskDate(event.target.value)
   }

   const submitHandler=(event)=>{
    event.preventDefault();

    //constructing the task
    const ob = {

        id: Math.floor(Math.random()*1000),
        name:taskName,
        date:taskDate,
        status:'active',
        flag:false
    }

    props.addTask(ob);
    setTaskName('')
    setTaskDate('')

   }

  return (
    <div>
    <div className='container'>
    <div className='form'>
      <form onSubmit={submitHandler}>
        <label >Enter Task</label><br></br>
        <input type='text' onChange={nameHandler} value={taskName} required/><br></br>

        <label >Enter Date</label><br></br>
        <input type="date" id="date" name="date" onChange={dateHandler} value={taskDate} required></input><br></br>
        
        <button className='submit' type='submit'>Submit</button>
      </form>
    </div>
    </div>
    </div>
  )
}

export default Form
