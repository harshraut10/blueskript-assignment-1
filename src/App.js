import Home from "./components/Home/Home";
import { createContext,useState,useEffect } from "react";
import ReactSwitch from "react-switch";
import './App.css';

export const ThemeContext=createContext(null);
function App() {
  const [theme,setTheme]=useState()
 // local storage is used to persist the theme value 
  useEffect(()=>{
    
    if(localStorage.getItem('theme')===null){
      setTheme("light")
    }
    else
    {
      setTheme(localStorage.getItem('theme'))
    }
  },[])

  
 
  const toggleTheme=()=>{
    if(theme==="light"){
      localStorage.setItem('theme','dark')
      setTheme(localStorage.getItem('theme'))
    }
    else{
      localStorage.setItem('theme','light')
      setTheme(localStorage.getItem('theme'))
    }
    //setTheme((curr)=>(curr==="light"?"dark":"light"))
  }



  return (
    <ThemeContext.Provider value={{theme,toggleTheme}} >
      
    <div className="app" id={theme}>
    <b className="label">Toggle Theme to {theme==='light'?'dark':'light'} mode</b>
      <ReactSwitch className="switch" onChange={toggleTheme} checked={theme==='dark'}/>
      <h1 className="text">TO-DO APP</h1>
      <Home/>
      
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
