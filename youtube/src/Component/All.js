import React from 'react'
import song1 from '../Images/song1.jpg'
import movie1 from '../Images/movie1.jpg'
import cartoon1 from '../Images/cartoon1.jpg'
import home1 from '../Images/home1.jpg'

export default function All() {
  return (
    <div>
        <h1 class=" text-success">hi this page All</h1> 
        <img src={song1} style={{height:'300px', width:'300px'}} class='mx-2 my-2'></img>
        <img src={movie1} style={{height:'300px', width:'300px'}} class='mx-2 my-2'></img> 
        <img src={cartoon1} style={{height:'300px', width:'300px'}} class='mx-2 my-2'></img>
        <img src={home1} style={{height:'300px', width:'300px'}} class='mx-2 my-2'></img>
        </div>
  )
}
