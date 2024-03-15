import React from 'react'
import img1 from './Images/located-step-aerobics-fitness.webp'
import img2 from './Images/step-aerobics-vector-514815.jpg'
import img3 from './Images/297422539.jpg'
import img4 from './Images/New-Project-56-1.jpg'
import img5 from './Images/aerobic-dance-exercise.jpg'
import img6 from './Images/step-aerobics.jpg'
import img7 from './Images/th.jpg'

export default function Aerobics() {
  return (

    <div class='row' >
      <div class='col-sm-3'>
    <div><h1 class=" text-success">hi this is page Aerobics</h1>
    <img src={img1} style={{height:'200px' , width:'200px'}} class='mx-5 my-3'></img>
    <img src={img2} style={{height:'200px' , width:'200px'}} class='mx-5 my-3'></img>
    <img src={img3} style={{height:'200px' , width:'200px'}} class='mx-5 my-3'></img>
    <img src={img4} style={{height:'200px' , width:'200px'}} class='mx-5 my-3'></img>
    <img src={img5} style={{height:'200px' , width:'200px'}} class='mx-5 my-3'></img>
    <img src={img6} style={{height:'200px' , width:'200px'}} class='mx-5 my-3'></img>
    <img src={img7} style={{height:'200px' , width:'200px'}} class='mx-5 my-3'></img>
    
    </div>
    </div>
    </div>
  )
}
