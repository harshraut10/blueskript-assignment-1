import React from 'react'
import './DisplayCompletedTasks.css'
import '../../theme.css';
const DisplayCompletedTasks = (props) => {

  //function invokes the parent component
  const removeHandler=()=>{
    props.Crem()
  }

  //function forwards the id to the parent component
  const deleteHandler=(id)=>{
    props.CremSingle(id)
  }

  let data
  //check for null error
  if(props.tasks)
  {
     data=props.tasks.filter( tsk => tsk.status === 'complete' && tsk.flag===true)
  }
  else{
    data=[]
  } 

  return (
    <div>
      <div>
       { data.length > 0 ? <button className='button-del' onClick={removeHandler}>Remove All Tasks</button> : null}
      </div>
      { 
        data.map((tsk)=>(
            <div className='text display_container'>
            <div key={tsk.id}>
            <h3>{tsk.name}</h3>
            <h4>{tsk.date}</h4>
            <button className='button-del' onClick={()=>{deleteHandler(tsk.id)}}>Delete</button>
            </div>
            </div>
        ))
      }
    </div>
  )
}

export default DisplayCompletedTasks
