import React from 'react'

const DisplayCompletedTasks = (props) => {

  const removeHandler=()=>{
    props.Crem()
  }
  return (
    <div>
      <div>
        <button onClick={removeHandler}>Remove All Tasks</button>
      </div>
      {
        props.Ctasks.map((tsk)=>{
            return(
            <div className='text display_container'>
            <div key={tsk.id}>
            <h3>{tsk.name}</h3>
            <h4>{tsk.date}</h4>
            <h4>{tsk.id}</h4>
            </div>
            </div>)
            })
      }
    </div>
  )
}

export default DisplayCompletedTasks
