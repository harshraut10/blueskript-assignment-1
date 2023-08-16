import React from 'react'
import { useState } from 'react'
import './Form.css'
const Form = (props) => {
   const [taskName, setTaskName]=useState('');
   const [taskDate, setTaskDate]=useState('');

   //sets taskname when changed
   const nameHandler=(event)=>{
    setTaskName(event.target.value)
   }

    //sets date when changed
   const dateHandler=(event)=>{
    setTaskDate(event.target.value)
   }
    
   const submitHandler=(event)=>{
    event.preventDefault();

    //constructing the task
    const ob = {
        //assigning random number as ID 
        id: Math.floor(Math.random()*1000),
        name:taskName,
        date:taskDate,
        status:'active',
        flag:false
    }

    props.addTask(ob);

    //clearing the form input
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
