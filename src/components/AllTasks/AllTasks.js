import React from 'react'

const AllTasks = (props) => {
  return (
    <div>
        <button className='button-del' onClick={()=>{props.delete()}}>Clear ALL Tasks</button>
      { 
        props.tasks.map((tsk)=>(
            <div className='text display_container'>
            <div key={tsk.id}>
            <h3>{tsk.name}</h3>
            <h4>{tsk.date}</h4>
            <h4>Status: {tsk.status}</h4>
            </div>
            </div>
        ))
        }
    </div>
  )
}

export default AllTasks
