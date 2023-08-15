import React from 'react';
import Form from '../Form/Form';
import '../../theme.css';
import { useState } from 'react';
import DisplayTasks from '../DisplayTasks/DisplayTasks';
import NavBar from '../NavBar/NavBar';
import DisplayCompletedTasks from '../DisplayCompletedTasks/DisplayCompletedTasks';
const Home = () => {

  const initial_tasks=[
    {
      id:1,
      name:"Go shopping",
      date:"2/7/23"
    },
    {
      id:2,
      name:"Do homework",
      date:"5/7/23"
    }
  ]
  const [tasks,setTasks]=useState(initial_tasks)
  const [completedTasks, setCompletedTasks]=useState([]);
  //to keep record of all the tasks
  //const [allTasks,setAllTasks]=useState([])
  
  const [curTasks,setCurTasks]=useState(true);
  const [comTasks,setComTasks]=useState(false);

  const addTaskHandler=(ob)=>{
      setTasks( prev=>{
        return [...prev,ob]
      })

  }

  const removeTask=(id)=>{
    let newTask=tasks.filter(task=> task.id!==id)
    setTasks(newTask)
  }

  const completedTasksFunc=(id)=>{
    let fetch=tasks.find(task=>task.id===id)
    setCompletedTasks(prev=>{
      return [...prev,fetch]
    })

    //deletes the task from the task array
    let newTask=tasks.filter(task=> task.id!==id)
    setTasks(newTask)
  }

  const NavStatus=(str)=>{
    if( str === 'show_current_tasks')
    {
        setComTasks(false);
        setCurTasks(true)
    }
    else if (str==='show_completed_tasks'){
      setComTasks(true);
      setCurTasks(false)
    }

    ///remove
    console.log(comTasks)
  }

  //function to remove completed tasks
  const removeCompletedTasks=()=>{
    setCompletedTasks([])
  }


  return (
    <div>
      
      <Form addTask={addTaskHandler}/>
      <NavBar status={NavStatus} />

      { curTasks === true ? <DisplayTasks taskComplete={completedTasksFunc} deleteTask={removeTask} task={tasks} />
      
      :  <DisplayCompletedTasks Ctasks={completedTasks} Crem={removeCompletedTasks}/>
    }
      
     
    </div>
  )
}

export default Home
