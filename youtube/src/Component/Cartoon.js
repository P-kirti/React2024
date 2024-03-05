import React from 'react'
import cartoon1 from '../Images/cartoon1.jpg'
import cartoon2 from '../Images/cartoon2.jpg'
import cartoon3 from '../Images/cartoon3.jpg'
import cartoon4 from '../Images/cartoon4.png'

export default function Cartoon() {
  return (
    <div><h1>hi here you watching some cartoons</h1>
      <img src={cartoon1} style={{height:'200px', width:'300px'}} class='mx-2 my-2'></img>
      <img src={cartoon2} style={{height:'200px', width:'300px'}} class='mx-2 my-2'></img>
      <img src={cartoon3} style={{height:'200px', width:'300px'}} class='mx-2 my-2'></img>
      <img src={cartoon4} style={{height:'200px', width:'300px'}} class='mx-2 my-2'></img>
    
    </div>
  )
}
