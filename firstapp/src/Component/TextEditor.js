import React, { useState } from 'react'

export const TextEditor = () => {
    
    let [oldStyle,newStyle]=useState({
        color:'black',
        backgroundColor:'white'
       
    })

    let changecolor=()=>
    {
        if(oldStyle.color=='white')
    {
newStyle({
    color:'black',
    backgroundColor:'white'
       })
    }
else
{
    newStyle({
    color:'black',
    backgroundColor:'white'
    })
}
}
    
    let changeKranewala =()=>
    {
       let newtext=otext.toUpperCase();   //tochange the text in upper case//
        ftext(newtext);
    }
    let jahachangehoga=(Kirti)=>
    {     //to edit the textatrea//
        ftext(Kirti.target.value)
    }

    let changeKranewala2=()=>
    {
        let newtext=otext.toLowerCase();
        ftext(newtext);
    }

    
let [otext,ftext]=useState("hi this is my new text")
  return (
   
    <div>
         <div class='container'>
            <h2>This is my TextEditor to analyse</h2>
<textarea style={oldStyle} class="form-control" rows="8" value={otext} onChange={jahachangehoga}></textarea>
<button className="btn btn-primary mx-3" onClick={changeKranewala}>Change to Upper case</button>
<button className="btn btn-primary mx-3" onClick={changeKranewala2}>Change to Lower case</button>
<button className="btn btn-primary mx-3" onclick={changecolor} >Dark Mode on</button>
</div>
<h1>Your Word & Character Records</h1>
<p>{otext.split(" ").length} words & {otext.length} Character</p>

    </div>
    
  );
}
