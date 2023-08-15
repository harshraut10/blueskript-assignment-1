import React from 'react'
import '../../theme.css';
import './NavBar.css'
import { useState } from 'react';
const NavBar = (props) => {
  const [clicked1,setClicked1]=useState(true)
  const [clicked2,setClicked2]=useState(false)
  return (
    <div className='container'>
      <button className= {`nav-btn ${clicked1 ? 'clicked' : ''}`} onClick={()=>{props.status('show_current_tasks')
      setClicked1(true);
      setClicked2(false)
      
    }}>Active Tasks</button>
      <button className= {`nav-btn ${clicked2 ? 'clicked' : ''}`} onClick={()=>{props.status('show_completed_tasks')
    setClicked1(false);
    setClicked2(true)
    }}>Completed Tasks</button>
    </div>
  )
}

export default NavBar
