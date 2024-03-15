import React from 'react'
import movie1 from '../Images/movie1.jpg'
import movie2 from '../Images/movie2.jpg'
import movie3 from '../Images/movie3.jpg'
import movie4 from '../Images/movie 4.jpg'
import movie5 from '../Images/movie5.jpg'
export default function Movies() {
  return (
    <div><h1>Hi you are watching Movies</h1>
    <img src={movie1} style={{height:'200px', width:'200px'}} class='mx-2 my-2'></img>
    <img src={movie2} style={{height:'200px', width:'200px'}} class='mx-2 my-2'></img>
    <img src={movie3} style={{height:'200px', width:'200px'}} class='mx-2 my-2'></img>
    <img src={movie4} style={{height:'200px', width:'200px'}} class='mx-2 my-2'></img>
    <img src={movie5} style={{height:'200px', width:'200px'}} class='mx-2 my-2'></img>
    
    
    
    </div>
    
  )
}
