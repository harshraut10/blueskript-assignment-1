import React from 'react'
import '../../theme.css';
import { useState } from 'react';
import './NavBar.css'
const NavBar = (props) => {
  //States used to handle the conditions of all 3 buttons
  const [clicked1,setClicked1]=useState(true)
  const [clicked2,setClicked2]=useState(false)
  const [clicked3,setClicked3]=useState(false)

  let Adata
  if(props.tasks)
  {
     Adata=props.tasks.filter( tsk => tsk.status === 'active')

  }
  else{
    Adata=[]
  }

  let Cdata
  if(props.tasks)
  {
     Cdata=props.tasks.filter( tsk => tsk.status === 'complete' && tsk.flag===true)

  }
  else{
    Cdata=[]
  }


  return (
    <div className='container'>
      <button className= {`nav-btn ${clicked1 ? 'clicked' : ''}`} onClick={()=>{props.status('show_current_tasks')
      setClicked1(true);
      setClicked2(false)
      setClicked3(false)
      
    }}>Active Tasks <span className='span'>{Adata.length}</span></button>

      <button className= {`nav-btn ${clicked2 ? 'clicked' : ''}`} onClick={()=>{props.status('show_completed_tasks')
    setClicked1(false);
    setClicked2(true)
    setClicked3(false)
    }}>Completed Tasks <span className='span'>{Cdata.length}</span></button>

  <button className= {`nav-btn ${clicked3 ? 'clicked' : ''}`} onClick={()=>{props.status('show_all_tasks')
  setClicked1(false);
  setClicked2(false)
  setClicked3(true)
  }}>All Tasks <span className='span'>{props.tasks.length}</span></button>

  </div>
  )
}

export default NavBar
