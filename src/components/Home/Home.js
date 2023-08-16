import React from 'react';
import Form from '../Form/Form';
import '../../theme.css';
import { useState,useEffect } from 'react';
import DisplayTasks from '../DisplayTasks/DisplayTasks';
import NavBar from '../NavBar/NavBar';
import DisplayCompletedTasks from '../DisplayCompletedTasks/DisplayCompletedTasks';


const Home = () => {

  

  // const initial_tasks=[
  //   {
  //     id:1,
  //     name:"Go shopping",
  //     date:"2/7/23",
  //     status:'active'
  //   },
  //   {
  //     id:2,
  //     name:"Do homework",
  //     date:"5/7/23",
  //     status:'complete'
  //   }
  // ]

  // useEffect(()=>{
  //    localStorage.setItem('tasks',JSON.stringify([]))

  // },[])
  

 // localStorage.setItem('tasks',JSON.stringify(initial_tasks))
  //getting items from local storage
  const getLocalStorageTasks=()=>{
    
     const data=JSON.parse(localStorage.getItem('tasks'))
      // return (data.filter(item=>item.status === 'active'))
      console.log(data)
      if (data === null){
        return []
      }
      else{
        return data
      }
    }
    
   
  const getLocalCompleteTasks=()=>{
    const data=JSON.parse(localStorage.getItem('tasks'))||[]
      // return (data.filter(item=>item.status === 'complete'))
      if (data===null){
        return []
      }
      else{
        return data
      }
   
  }

  const getLocalAllTasks=()=>{
    const items= JSON.parse (localStorage.getItem('tasks'))

   return(items)
  }

  const [tasks,setTasks]=useState([])


 

  //localStorage.setItem('tasks',JSON.stringify(tasks))

  const [completedTasks, setCompletedTasks]=useState([]);
  //to keep record of all the tasks
  const [allTasks,setAllTasks]=useState(getLocalStorageTasks())
  
  const [curTasks,setCurTasks]=useState(true);
  const [comTasks,setComTasks]=useState(false);

  const[dep,setDep]=useState()

  useEffect(()=>{
   const stored=JSON.parse(localStorage.getItem('tasks') )||[];
    setAllTasks(stored)
 },[])
  

  useEffect(()=>{
    localStorage.removeItem('tasks')
    localStorage.setItem('tasks',JSON.stringify(allTasks));

  },[allTasks])

 
  const addTaskHandler=(ob)=>{ 
      // setTasks( prev=>{
      //   return [...prev,ob]
      // })

      setAllTasks( prev=>{
        return [...prev,ob]
      })

 


  }

  const removeTask=(id)=>{
    let newTask=allTasks.filter(task=> task.id!==id)
    setAllTasks(newTask)
  }

  const completedTasksFunc=(id)=>{
    let fetch=allTasks.find(task=>task.id===id)
    let updTask={
      ...fetch,
      status:'complete',
      flag:true
    }
    // setCompletedTasks(prev=>{
    //   return [...prev,updTask]

    // })
    let newTask=allTasks.filter(task=> task.id!==id)
    setAllTasks(newTask)

    setAllTasks(prev=>{
      return [...prev,updTask]
    })



    

    //deletes the task from the task array
    

    setDep(id)

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
    const updTask = allTasks.map(task=>
      task.status==='complete' ? {...task,flag:false}:task
      );
      setAllTasks(updTask)
  }
  let content
  if(curTasks){
    content=<DisplayTasks taskComplete={completedTasksFunc} deleteTask={removeTask} tasks={allTasks} />
  }
  else{
    content=<DisplayCompletedTasks tasks={allTasks} Crem={removeCompletedTasks}/>
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
