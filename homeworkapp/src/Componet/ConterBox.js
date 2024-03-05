import React, { useState } from 'react'

export const ConterBox = () => {
let [oldval,newval]=useState(0)


  return (
    <center>
    <div id='counter'><h3 id='content'>{oldval}</h3></div>
    <br></br>
    <button  className='btn btn-primary mx-2' onClick={()=>newval(oldval+7)} id='btn'>Increment</button>
    <button className='btn btn-primary' onClick={()=>newval(oldval-7)} id='btn'>Decrement</button>
    </center>
  )
}
