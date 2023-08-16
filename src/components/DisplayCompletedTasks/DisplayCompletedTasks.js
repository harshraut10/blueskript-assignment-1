import React from 'react'

const DisplayCompletedTasks = (props) => {

  const removeHandler=()=>{
    props.Crem()
  }

  const deleteHandler=(id)=>{
    props.CremSingle(id)
  }

  let data
  if(props.tasks)
  {
     data=props.tasks.filter( tsk => tsk.status === 'complete' && tsk.flag===true)
     //console.log(data)
  //console.log('retrived',data)

  }
  else{
    data=[]
  } 
  return (
    <div>
      <div>
        <button className='button-del' onClick={removeHandler}>Remove All Tasks</button>
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
