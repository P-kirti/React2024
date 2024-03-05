import { Navbar } from "./Component/Navbar";
import './App.css';
import { Slider } from "./Component/Slider";
import { Textbox } from "./Component/Textbox";
import { TopNav } from "./Component/TopNav";
import { Career } from "./Component/Career";
import { TextEditor } from "./Component/TextEditor";
import { Accordian } from "./Component/Accordian";
import {usestate} from "react";

function App() {
let[oldmode,newmode]= usestate("primary")

let btn=()=>{
  if(oldmode=="primary"){
    newmode("success")
  }
  else{
    newmode("primary")
  }
}


  return (
    <div className="App">
      <Accordian mode={oldmode}  kirti={btn}></Accordian>

<TextEditor></TextEditor>

      {/*
      <h1>Homework-1</h1>
       <Navbar/> 
       <Slider/>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <hr/>
       <br></br>
       <br></br>

       <h1>Homework-2</h1>
       <Textbox/>
       <br></br>
       <br></br>
       <br></br>
       <h1>Homework-3</h1>
       <TopNav change="website"/>

       <br/>
       <hr/>
       <h1>homework-4</h1>
       <Career test="BE(E&TC)"/>
       <br></br>
       <hr></hr>
  <h3>homework 5</h3> */}


    </div>
    
  );
}

export default App;
