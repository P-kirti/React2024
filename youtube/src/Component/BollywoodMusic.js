import React from 'react'
import song1 from '../Images/song1.jpg'
import song2 from '../Images/song2.jpg'
import song3 from '../Images/song3.jpg'
import song4 from '../Images/song4.jpg'
import song5 from '../Images/song5.jpg'
import song6 from '../Images/song6.jpg'

export default function BollywoodMusic() {
  return (
    <div><h1 class=" text-success" >
        hi here some BollywoodMusic</h1>
        <img src={song1} style={{height:'200px', width:'200px'}} class='mx-2 my-2'></img>
        <img src={song2} style={{height:'200px' , width:'200px'}} class='mx-2 my-2'></img>
        <img src={song3} style={{height:'200px',width:'200px'}} class='mx-2 my-2'></img>
        <img src={song4} style={{height:'200px', width:'200px'}} class='mx-2 my-2'></img>
        <img src={song5} style={{height:'200px',width:'200px'}} class='mx-2 my-2'></img>
        <img src={song6} style={{height:'200px',width:'200px'}} class='mx-2 my-2'></img>
        
        
        </div>
       
  )
}
