import React from 'react';
import Form from '../Form/Form';
import '../../theme.css';
import { useState,useEffect } from 'react';
import DisplayTasks from '../DisplayTasks/DisplayTasks';
import NavBar from '../NavBar/NavBar';
import DisplayCompletedTasks from '../DisplayCompletedTasks/DisplayCompletedTasks';
import AllTasks from '../AllTasks/AllTasks';

const Home = () => {


 
  //getting items from local storage
  const getLocalStorageTasks=()=>{
    
     const data=JSON.parse(localStorage.getItem('HarshTasks'))||[]
        return data
    }
    

 
  //to keep record of all the tasks
  const [allTasks,setAllTasks]=useState(getLocalStorageTasks())
  
  //setting flags to toggle between active, complete and all tasks
  const [curTasks,setCurTasks]=useState(true);
  const [comTasks,setComTasks]=useState(false);
  const [historyTask,setHistoryTask]=useState(false);


  useEffect(()=>{
   const stored=JSON.parse(localStorage.getItem('HarshTasks') )||[];
    setAllTasks(stored)
 },[])
  
 //runs to update the local storage only when allTasks array changes
  useEffect(()=>{
    localStorage.setItem('HarshTasks',JSON.stringify(allTasks));

  },[allTasks])

 //adds a new task
  const addTaskHandler=(ob)=>{ 

      setAllTasks( prev=>{
        return [...prev,ob]
      })

  }

  //removes task based on id 
  const removeTask=(id)=>{
    let newTask=allTasks.filter(task=> task.id!==id)
    setAllTasks(newTask)
  }

  //sets the status property of a task to 'complete' when invoked
  const completedTasksFunc=(id)=>{
    let fetch=allTasks.find(task=>task.id===id)
    let updTask={
      ...fetch,
      status:'complete',
      flag:true
    }
    
    //retrieves all the tasks except the current id task
    let newTask=allTasks.filter(task => task.id!==id)
    setAllTasks(newTask)

    //adds the updated complete task
    setAllTasks(prev=>{
      return [...prev,updTask]
    })
  }

  //gets inputs from the navBar component to set the flags
  const NavStatus=(str)=>{
    if( str === 'show_current_tasks')
    {
        setComTasks(false);
        setCurTasks(true)
        setHistoryTask(false)
    }
    else if (str==='show_completed_tasks'){
      setComTasks(true);
      setCurTasks(false)
      setHistoryTask(false)
    }
    else {
      setComTasks(false);
      setCurTasks(false)
      setHistoryTask(true)
    }
  }

  //function to remove completed tasks
  const removeCompletedTasks=()=>{
    const updTask = allTasks.map(task=>
      task.status==='complete' ? {...task,flag:false}:task
      );
      setAllTasks(updTask)
  }

// function to remove a single completed task
  const removeCompletedTask=(id)=>{
    const updTask = allTasks.map(task=>
      task.id===id ? {...task,flag:false}:task
      );
    setAllTasks(updTask)
  }

  //removes all the tasks from local storage
  const clearLocalStorage=()=>{

    if(window.confirm('Are you sure you want to delete all tasks?'))
     { 
      localStorage.removeItem('HarshTasks')
      setAllTasks(getLocalStorageTasks())
    }
  }

  //Displays the contents from the selected navBar options
  let content
  if(curTasks){
    content=<DisplayTasks taskComplete={completedTasksFunc} deleteTask={removeTask} tasks={allTasks} />
  }
  else if(comTasks){
    content=<DisplayCompletedTasks CremSingle={removeCompletedTask} tasks={allTasks} Crem={removeCompletedTasks}/>
  }
  else if(historyTask){
    content=<AllTasks delete={clearLocalStorage} tasks={allTasks}/>
  }



  return (
    <div className='home'>
      
      <Form addTask={addTaskHandler}/>
      <NavBar status={NavStatus} />

       {content}
       
    </div>
  )
}

export default Home
