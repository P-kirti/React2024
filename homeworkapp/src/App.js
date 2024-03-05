
import { useState } from 'react';
import './App.css';
import { Colorbox } from './Componet/Colorbox';
import { ConterBox } from './Componet/ConterBox';
import Navbar from './Componet/Navbar';
import { TopNav } from './Componet/TopNav';

function App() {
  let [darkmode,setmode]=useState('dark')
  let toggleButton=(kirti)=>{

    if(darkmode=="dark")
    {
      setmode('light')
    }
    else
    {setmode('dark ')}
  }
  return (
   
    <div>
      <Navbar mode={darkmode} kirti={toggleButton}></Navbar>
      <Accordian></Accordian>


     {/*<TopNav></TopNav> 
    <h1 id='moving'><marquee>This is my Counter Box</marquee></h1>  } 

     <ConterBox/>

  <br></br>

<Colorbox></Colorbox>*/}
</div>
);
}

export default App;
