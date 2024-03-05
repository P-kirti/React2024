import React from 'react'
import home1 from '../Images/home1.jpg'
import home2 from '../Images/home2.webp'
import home3 from '../Images/home3.jpg'
import home4 from '../Images/home4.jpeg'

export default function HomeImprovement() {
  return (
    <div> <h1>here some ideas about HomeImprovement</h1>
      <img src={home1} style={{height:'400px', width:'400px'}} class='mx-2 my-2'></img>
      <img src={home2} style={{height:'400px', width:'400px'}} class='mx-2 my-2'></img>
      <img src={home3} style={{height:'400px', width:'400px'}} class='mx-2 my-2'></img>
      <img src={home4} style={{height:'400px', width:'400px'}} class='mx-2 my-2'></img>
      </div>
  )
}
