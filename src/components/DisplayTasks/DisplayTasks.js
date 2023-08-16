
import '../../theme.css';
import './DisplayTasks.css'
const DisplayTasks = (props) => {
  const deleteHandler=(id)=>{
    props.deleteTask(id)
  }

  const completeTaskHandler=(id)=>{
      props.taskComplete(id)
  }
  let data
  if(props.tasks)
  {
     data=props.tasks.filter( tsk => tsk.status === 'active')
  console.log('retrived',data)

  }
  else{
    data=[]
  }
  
  return (
    <div >
      {
        
        data.map(tsk=>(
            <div className='text display_container'>
            <div key={tsk.id}>
            <h3>{tsk.name}</h3>
            <h4>{tsk.date}</h4>
            <button className='button-del' onClick={()=>{deleteHandler(tsk.id)}}>Delete</button>
            <button className='complete' onClick={()=>completeTaskHandler(tsk.id)}>Complete</button>
            </div>
            </div>
        ))
      }
    </div>
  )
}

export default DisplayTasks
