import React from 'react'

const DisplayCompletedTasks = (props) => {

  const removeHandler=()=>{
    props.Crem()
  }

  let data
  if(props.tasks)
  {
     data=props.tasks.filter( tsk => tsk.status === 'complete' && tsk.flag===true)
     console.log(data)
  //console.log('retrived',data)

  }
  else{
    data=[]
  }
  return (
    <div>
      <div>
        <button onClick={removeHandler}>Remove All Tasks</button>
      </div>
      { 
        data.map((tsk)=>(
            <div className='text display_container'>
            <div key={tsk.id}>
            <h3>{tsk.name}</h3>
            <h4>{tsk.date}</h4>
            <h4>{tsk.id}</h4>
            </div>
            </div>
        ))
      }
    </div>
  )
}

export default DisplayCompletedTasks
